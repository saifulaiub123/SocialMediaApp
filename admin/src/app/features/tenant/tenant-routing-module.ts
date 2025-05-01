import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantAddEditComponent } from './tenant-add-edit/tenant-add-edit.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: TenantListComponent,
    },
    {
      path: 'add-edit',
      component: TenantAddEditComponent,
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
export class TenantRoutingModule {
}
