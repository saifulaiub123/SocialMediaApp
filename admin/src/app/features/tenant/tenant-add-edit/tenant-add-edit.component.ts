import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { SubscriptionPlanVM } from '../../../@core/model/subscription-plan';
import { SubscriptionPlanService } from '../../../@core/service/subscription-plan.service';
import { TenantService } from '../../../@core/service/tenant.service';
import { TenantModel, TenantViewModel } from '../../../@core/model/tenant-view.model';
import { ApiResponse } from '../../../@core/model/api-response.model';

@Component({
  selector: 'ngx-tenant-add-edit',
  templateUrl: './tenant-add-edit.component.html',
  styleUrls: ['./tenant-add-edit.component.scss']
})
export class TenantAddEditComponent implements OnInit {
  public form: FormGroup;
  public id: number = 0;
  public subscriptionPlans: SubscriptionPlanVM[] = [];
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private subscriptionPlanService: SubscriptionPlanService,
    private tenantService: TenantService,
    private cdr: ChangeDetectorRef
  ){

  }



  get name() { return this.form.get('name'); }
  get description() { return this.form.get('description'); }
  get subscriptionPlanId() { return this.form.get('subscriptionPlanId'); }
  get expiresIn() { return this.form.get('expiresIn'); }

  ngOnInit() {
    const currentDate = new Date();
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    const formattedDate = nextMonthDate.toISOString().split('T')[0];

    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      subscriptionPlanId: new FormControl([], [Validators.required]),
      expiresIn: new FormControl([formattedDate], [Validators.required]),
    })
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')) || 0;
      this.loadInitialData();
    });
  }

  loadInitialData() {
    if (this.id && this.id > 0) {
      forkJoin([
        this.getSubscriptionPlans(),
        this.tenantService.getTenantById(this.id) as Observable<ApiResponse<TenantViewModel>>
      ]).subscribe(([subscriptionPlansRes, tenantRes]: [ApiResponse<SubscriptionPlanVM[]>, ApiResponse<TenantViewModel>]) => {
        if (subscriptionPlansRes.isSuccess) {
          this.subscriptionPlans = subscriptionPlansRes.data;
        }

        // this.cdr.detectChanges();

        if (tenantRes.isSuccess) {
          const tenant = tenantRes.data;
          this.form.patchValue({
            name: tenant?.name,
            description: tenant?.description,
            subscriptionPlanId: tenant?.subscriptionPlanId,
            expiresIn: tenant?.expiresIn,
          });
        }
        this.cdr.detectChanges();
      });

    } else {
      this.getSubscriptionPlans().subscribe((res: ApiResponse<SubscriptionPlanVM[]>) => {
        if (res.isSuccess) {
          this.subscriptionPlans = res.data;
          this.cdr.detectChanges();
        }
      });
    }
  }
  getSubscriptionPlans() : Observable<ApiResponse<SubscriptionPlanVM[]>>
  {
    return this.subscriptionPlanService.getAll();
  }

  save(){
    this.submitted = true;
    if (this.form.valid) {
      const tenant: TenantModel = {
        id: this.id > 0 ? this.id : 0,
        name: this.form.value.name,
        description: this.form.value.description,
        subscriptionPlanId: this.form.value.subscriptionPlanId,
        expiresIn: this.form.value.expiresIn,
      };

      if (tenant.id > 0) {
        this.tenantService.updateTenant(tenant).subscribe((res: ApiResponse<TenantViewModel>) => {
          // this.submitted = false;
          if (res.isSuccess) {
            this.router.navigate(['/feature/tenant/list']);
          }
        });
      } else {
        this.tenantService.addTenant(tenant).subscribe((res: ApiResponse<TenantViewModel>) => {
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
