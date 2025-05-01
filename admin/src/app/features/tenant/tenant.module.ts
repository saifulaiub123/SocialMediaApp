import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TenantAddEditComponent } from './tenant-add-edit/tenant-add-edit.component';
import { TenantListComponent } from './tenant-list/tenant-list.component';
import { TenantRoutingModule } from './tenant-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbPopoverModule, NbSearchModule, NbIconModule, NbAlertModule, NbInputModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbTimepickerModule, NbAutocompleteModule, NbDialogModule } from '@nebular/theme';
// import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../../pages/forms/forms-routing.module';



@NgModule({
  declarations: [
    TenantAddEditComponent,
    TenantListComponent
  ],
  imports: [
    CommonModule,
    TenantRoutingModule,

    // NgSelectModule,
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
    // NgbTimepickerModule
  ]
})
export class TenantModule { }
