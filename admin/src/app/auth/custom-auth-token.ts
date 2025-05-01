import { NbAuthJWTToken, NbAuthSimpleToken } from '@nebular/auth';

export class CustomAuthToken extends NbAuthSimpleToken {

  // Define your extra properties
  name: string;
  username: string;
  email: string;
  roles: string[];

  // Override the value getter
  constructor(rawToken: any = {}, ownerStrategyName: string) {
    super(rawToken?.token || '', ownerStrategyName); // important: pass only token string to parent
    this.name = rawToken?.name;
    this.username = rawToken?.username;
    this.email = rawToken?.email;
    this.roles = rawToken?.roles || [];
  }
}
