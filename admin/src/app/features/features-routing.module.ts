import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './features.component';
// import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: FeaturesComponent,
  children: [
    {
      path: 'tenant',
      loadChildren: () => import('./tenant/tenant.module')
        .then(m => m.TenantModule),
    },
    {
      path: 'subscription-plan',
      loadChildren: () => import('./subscription-plan/subscription-plan.module')
        .then(m => m.SubscriptionPlanModule),
    },
    {
      path: 'user',
      loadChildren: () => import('./user/user.module')
        .then(m => m.UserModule),
    },
    {
      path: '',
      redirectTo: 'tenant',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {
}
