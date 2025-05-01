export interface TenantViewModel {
      id? : number;
      name : string;
      description? : string;
      subscriptionPlanId? : number;
      subscriptionPlan? : string;
      expiresIn? : Date;
}
export interface TenantModel {
  id? : number;
  name : string;
  description? : string;
  subscriptionPlanId? : number;
  expiresIn? : Date;

}

