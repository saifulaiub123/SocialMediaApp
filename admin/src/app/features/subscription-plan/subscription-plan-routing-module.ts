import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SubscriptionPlanListComponent } from './subscription-plan-list/subscription-plan-list.component';
import { SubscriptionPlanAddEditComponent } from './subscription-plan-add-edit/subscription-plan-add-edit.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: SubscriptionPlanListComponent,
    },
    {
      path: 'add-edit/:id',
      component: SubscriptionPlanAddEditComponent,
    },
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubscriptionPlanRoutingModule {
}
