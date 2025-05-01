export interface UserVM {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  tenantId: number;
  role: string;
  roleId: number;
}

export interface UserModel {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
  tenantId?: number;
  role: string;
  password: string;
}
