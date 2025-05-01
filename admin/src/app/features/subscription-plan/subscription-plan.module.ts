import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbCardModule, NbPopoverModule, NbSearchModule, NbIconModule, NbAlertModule, NbInputModule, NbButtonModule, NbActionsModule, NbUserModule, NbCheckboxModule, NbRadioModule, NbDatepickerModule, NbSelectModule, NbTimepickerModule, NbAutocompleteModule, NbDialogModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ComponentsModule } from '../../@components/components.module';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsRoutingModule } from '../../pages/forms/forms-routing.module';
import { SubscriptionPlanRoutingModule } from './subscription-plan-routing-module';
import { SubscriptionPlanAddEditComponent } from './subscription-plan-add-edit/subscription-plan-add-edit.component';
import { SubscriptionPlanListComponent } from './subscription-plan-list/subscription-plan-list.component';



@NgModule({
  declarations: [
    SubscriptionPlanAddEditComponent,
    SubscriptionPlanListComponent
  ],
  imports: [
    CommonModule,
      SubscriptionPlanRoutingModule,
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

      ReactiveFormsModule,
      Ng2SmartTableModule,
      NbTimepickerModule,
      NbAutocompleteModule,
      ComponentsModule,
      NbDialogModule.forChild(),
  ]
})
export class SubscriptionPlanModule { }
