import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TenantService } from '../../../@core/service/tenant.service';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { SubscriptionPlanService } from '../../../@core/service/subscription-plan.service';

@Component({
  selector: 'ngx-subscription-plan-list',
  templateUrl: './subscription-plan-list.component.html',
  styleUrls: ['./subscription-plan-list.component.scss']
})
export class SubscriptionPlanListComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true // Must be true to intercept edit
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    actions: {
      add: false,
      delete: false,
      edit: false,
      custom: [
        {
          name: 'customEdit',
          title: '<i class="nb-edit custom-edit"></i>'
        },
        {
          name: 'customDelete',
          title: '<i class="nb-trash custom-delete"></i>'
        },
      ],
    },
    columns: {
      Id: {
        title: 'Id',
        type: 'number',
        filter:false,
      },
      Name: {
        title: 'Title',
        type: 'string',
        filter: false,
      },
      Description: {
        title: 'Description',
        type: 'string',
        filter: false,
      },
      Price: {
        title: 'Price',
        type: 'number',
        filter: false,
      },
      Discount: {
        title: 'Discount',
        type: 'number',
        filter: false,
      },
      MaxUsers: {
        title: 'Maximun Users',
        type: 'string',
        filter: false,
      },
      MaxReports: {
        title: 'Maximum Reports',
        type: 'string',
        filter: false,
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    pager: { display: false }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private _subscriptionPlanService: SubscriptionPlanService,
    private _router: Router,
    private _dialogService: NbDialogService,
    ) {

  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this._subscriptionPlanService.getAll().subscribe((res: any) => {
      this.source.load(res.data);
    })
  }

  onAction(event: any): void {
    if (event.action === 'customEdit') {
      this._router.navigateByUrl(`/feature/subscription-plan/add-edit/${event.data.Id}`);
    }
    else if (event.action === 'customDelete') {
     this.onDeleteConfirm(event);
    }
  }

  navigateToAddTenant()
  {
    this._router.navigateByUrl("/feature/subscription-plan/add-edit/0");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this._subscriptionPlanService.delete(event.data.Id).subscribe((res: any) => {
        this.loadData();
      });
    } else {
    }
  }

}
