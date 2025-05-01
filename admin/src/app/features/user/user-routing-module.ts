import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'list',
      component: UserListComponent,
    },
    {
      path: 'add-edit/:id',
      component: UserAddEditComponent,
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
export class UserRoutingModule {
}
