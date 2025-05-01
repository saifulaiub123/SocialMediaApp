import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { SubscriptionPlanModel, SubscriptionPlanVM } from '../../../@core/model/subscription-plan';
import { SubscriptionPlanService } from '../../../@core/service/subscription-plan.service';
import { TenantService } from '../../../@core/service/tenant.service';
import { TenantModel, TenantViewModel } from '../../../@core/model/tenant-view.model';
import { ApiResponse } from '../../../@core/model/api-response.model';

@Component({
  selector: 'ngx-subscription-plan-add-edit',
  templateUrl: './subscription-plan-add-edit.component.html',
  styleUrls: ['./subscription-plan-add-edit.component.scss']
})
export class SubscriptionPlanAddEditComponent implements OnInit {
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
  get price() { return this.form.get('price'); }
  get discount() { return this.form.get('discount'); }
  get maxUsers() { return this.form.get('maxUsers'); }
  get maxReports() { return this.form.get('maxReports'); }

  ngOnInit() {
    
    this.form = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', []),
      price: new FormControl([], [Validators.required]),
      discount: new FormControl([], [Validators.required]),
      maxUsers: new FormControl([], [Validators.required]),
      maxReports: new FormControl([], [Validators.required]),
      
    })
    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id')) || 0;
      this.loadInitialData();
    });
  }

  loadInitialData() {
    if (this.id && this.id > 0) {
      forkJoin([
        this.subscriptionPlanService.getById(this.id) as Observable<ApiResponse<SubscriptionPlanVM>>
      ]).subscribe(([subscriptionPlanRes]: [ApiResponse<SubscriptionPlanVM>]) => {
        
        if (subscriptionPlanRes.isSuccess) {
          const subscriptionPlan = subscriptionPlanRes.data;
          this.form.patchValue({
            name: subscriptionPlan?.name,
            description: subscriptionPlan?.description,
            price: subscriptionPlan?.price,
            discount: subscriptionPlan?.discount,
            maxUsers: subscriptionPlan?.maxUsers,
            maxReports: subscriptionPlan?.maxReports,
          });
        }
        this.cdr.detectChanges();
      });

    } 
  }
  
  save(){
    this.submitted = true;
    if (this.form.valid) {
      const subscriptionPlan: SubscriptionPlanModel = {
        id: this.id > 0 ? this.id : 0,
        name: this.form.value.name,
        description: this.form.value.description,
        price: this.form.value.price,
        discount: this.form.value.discount,
        maxUsers: this.form.value.maxUsers,
        maxReports: this.form.value.maxReports,
      };

      if (subscriptionPlan.id > 0) {
        this.subscriptionPlanService.update(subscriptionPlan).subscribe((res: ApiResponse<any>) => {
          if (res.isSuccess) {
            this.router.navigate(['/feature/subscription-plan/list']);
          }
        });
      } else {
        this.subscriptionPlanService.add(subscriptionPlan).subscribe((res: ApiResponse<any>) => {
          // this.submitted = false;
          if (res.isSuccess) {
            this.router.navigate(['/feature/subscription-plan/list']);
          }
        });
      }
    }
    else {
      this.form.markAllAsTouched();
    }
  }
}
