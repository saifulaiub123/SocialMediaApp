export interface UserVM {
  Id: number;
  Name: string;
  Email: string;
  PhoneNumber: string;
  TenantId: number;
  Roles: string[];
}

export interface UserModel {
  Email: string;
  Name: string;
  PhoneNumber: string;
  TenantId: number;
  RoleId: number;
  Password: string;
}
