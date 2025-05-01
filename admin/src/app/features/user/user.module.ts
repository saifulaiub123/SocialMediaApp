import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbPopoverModule, NbSearchModule, NbIconModule, NbAlertModule, NbInputModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbTimepickerModule, NbAutocompleteModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../../pages/forms/forms-routing.module';
import { UserRoutingModule } from './user-routing-module';
import { UserAddEditComponent } from './user-add-edit/user-add-edit.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [
    UserAddEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,

    NbCardModule,
    NbPopoverModule,
    NbSearchModule,
    NbIconModule,
    NbAlertModule,
    ThemeModule,

    NbInputModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    FormsRoutingModule,
    NbSelectModule,
    // ngFormsModule,

    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbTimepickerModule,
    NbAutocompleteModule,
    ComponentsModule,
    NbDialogModule.forChild(),
  ]
})
export class UserModule { }
