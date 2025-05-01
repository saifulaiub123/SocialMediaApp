import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TenantService } from '../../../@core/service/tenant.service';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'ngx-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.scss']
})
export class TenantListComponent implements OnInit {

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
      id: {
        title: 'Id',
        type: 'number',
        filter:false,
        valuePrepareFunction: (value, row, cell) => {
          return cell.row.index + 1;
         },
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
      SubscriptionPlan: {
        title: 'SubscriptionPlan',
        type: 'number',
        filter:false,
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    pager: { display: false }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private _tenantService: TenantService,
    private _router: Router,
    private _dialogService: NbDialogService,
    ) {

  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this._tenantService.getAll().subscribe((res: any) => {
      this.source.load(res.data);
    })
  }

  onAction(event: any): void {
    if (event.action === 'customEdit') {
      this._router.navigate(['/edit', event.data.id]);
    }
    else if (event.action === 'customDelete') {
     this.onDeleteConfirm(event);
    }
  }

  navigateToAddTenant()
  {
    this._router.navigateByUrl("/feature/tenant/add-edit");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this._tenantService.deleteTenant(event.data.Id).subscribe((res: any) => {
        this.loadData();
      });
    } else {
    }
  }

}
