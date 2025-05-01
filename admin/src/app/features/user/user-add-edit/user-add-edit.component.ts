import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { SubscriptionPlanVM } from '../../../@core/model/subscription-plan';
import { SubscriptionPlanService } from '../../../@core/service/subscription-plan.service';
import { TenantService } from '../../../@core/service/tenant.service';
import { TenantModel, TenantViewModel } from '../../../@core/model/tenant-view.model';
import { ApiResponse } from '../../../@core/model/api-response.model';
import { UserService } from '../../../@core/service/user.service';
import { UserModel, UserVM } from '../../../@core/model/user';

@Component({
  selector: 'ngx-user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss']
})
export class UserAddEditComponent implements OnInit {
  public form: FormGroup;
  public id: number = 0;
  public tenants: TenantViewModel[] = [];
  submitted = false;

  roles = [
    { id: 'SuperAdmin', name: 'Super Admin' },
    { id: 'TenantAdmin', name: 'Tenant Admin' },
    { id: 'User', name: 'User' }
  ]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private tenantService: TenantService,
    private cdr: ChangeDetectorRef
  ){

  }



  get email() { return this.form.get('email'); }
  get name() { return this.form.get('name'); }
  get phoneNumber() { return this.form.get('phoneNumber'); }
  get role() { return this.form.get('role'); }
  get tenantId() { return this.form.get('tenantId'); }
  get password() { return this.form.get('password'); }

  ngOnInit() {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    const formattedDate = nextMonthDate.toISOString().split('T')[0];

    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', []),
      role: new FormControl(['User'], [Validators.required]),
      tenantId: new FormControl([], [Validators.required]),
      password: new FormControl([], [Validators.required]),
    })
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')) || 0;
      this.loadInitialData();
    });
  }

  loadInitialData() {
    if (this.id && this.id > 0) {
      forkJoin([
        this.getTenants(),
        this.userService.getById(this.id) as Observable<ApiResponse<UserVM>>
      ]).subscribe(([tenantRes, userRes]: [ApiResponse<SubscriptionPlanVM[]>, ApiResponse<UserVM>]) => {
        if (tenantRes.isSuccess) {
          this.tenants = tenantRes.data;
        }

        // this.cdr.detectChanges();

        if (userRes.isSuccess) {
          const user = userRes.data;
          this.form.patchValue({
            name: user?.name,
            email: user?.email,
            phoneNumber: user?.phoneNumber,
            role: user?.role,
            tenantId: user?.tenantId,
          });
        }
        this.cdr.detectChanges();
      });

    } else {
      this.getTenants().subscribe((res: ApiResponse<TenantViewModel[]>) => {
        if (res.isSuccess) {
          this.tenants = res.data;
          this.cdr.detectChanges();
        }
      });
    }
  }
  getTenants() : Observable<ApiResponse<TenantViewModel[]>>
  {
    return this.tenantService.getAll();
  }

  save(){
    this.submitted = true;
    if (this.form.valid) {
      const user: UserModel = {
        id: this.id > 0 ? this.id : 0,
        name: this.form.value.name,
        email: this.form.value.email,
        phoneNumber: this.form.value.phoneNumber,
        password: '',
        role: this.form.value.role,
        tenantId: this.form.value.tenantId,
      };

      if (user.id > 0) {
        this.tenantService.updateTenant(user).subscribe((res: ApiResponse<TenantViewModel>) => {
          // this.submitted = false;
          if (res.isSuccess) {
            this.router.navigate(['/feature/tenant/list']);
          }
        });
      } else {
        this.tenantService.addTenant(user).subscribe((res: ApiResponse<TenantViewModel>) => {
          // this.submitted = false;
          if (res.isSuccess) {
            this.router.navigate(['/feature/tenant/list']);
          }
        });
      }
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}
