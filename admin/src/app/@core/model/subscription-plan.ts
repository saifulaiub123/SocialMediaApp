export interface SubscriptionPlanVM {
  name : string;
  description? : string;
  price? : number;
  discount? : number;
  maxUsers? : number;
  maxReports? : number;
}
export interface SubscriptionPlanModel {
  id : number;
  name : string;
  description? : string;
  price? : number;
  discount? : number;
  maxUsers? : number;
  maxReports? : number;
}
