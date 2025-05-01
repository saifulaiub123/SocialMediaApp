import { Component, OnInit } from '@angular/core';
import { NbAuthService, NbAuthSimpleToken } from '@nebular/auth';
import { CustomAuthToken } from '../../auth/custom-auth-token';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent implements OnInit {

  user: any = {};

  constructor(private authService: NbAuthService) {}


  ngOnInit(): void {
    this.authService.getToken()
      .subscribe((data: CustomAuthToken) => {
        // if (data.token) {
        //   this.user = data.token;
        // }

  })
}
}
