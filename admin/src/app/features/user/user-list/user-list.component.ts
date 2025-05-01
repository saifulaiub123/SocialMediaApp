import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { TenantService } from '../../../@core/service/tenant.service';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { UserService } from '../../../@core/service/user.service';

@Component({
  selector: 'ngx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

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
      },
      name: {
        title: 'Name',
        type: 'string',
        filter: false,
      },
      email: {
        title: 'Email',
        type: 'string',
        filter: false,
      },
      phoneNumber: {
        title: 'PhoneNumber',
        type: 'string',
        filter:false,
      },
      roles: {
        title: 'Role',
        type: 'string',
        filter:false,
      }
    },
    attr: {
      class: 'table table-bordered'
    },
    pager: { display: false }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private _userService: UserService,
    private _router: Router,
    private _dialogService: NbDialogService,
    ) {

  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData()
  {
    this._userService.getAll().subscribe((res: any) => {
      this.source.load(res.data);
    })
  }

  onAction(event: any): void {
    if (event.action === 'customEdit') {
      this._router.navigateByUrl(`/feature/user/add-edit/${event.data.id}`);
    }
    else if (event.action === 'customDelete') {
     this.onDeleteConfirm(event);
    }
  }

  navigateToAddTenant()
  {
    this._router.navigateByUrl("/feature/user/add-edit/0");
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      this._userService.delete(event.data.Id).subscribe((res: any) => {
        this.loadData();
      });
    } else {
    }
  }

}
