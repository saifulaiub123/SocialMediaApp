import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SubscriptionPlanModel, SubscriptionPlanVM } from "../model/subscription-plan";
import { ApiResponse } from "../model/api-response.model";
@Injectable({
  providedIn: 'root'
})
export class SubscriptionPlanService {

  private api: string = environment.apiUrl + "/subscription-plan";
  constructor(private http: HttpClient){

  }

  getAll(): Observable<ApiResponse<SubscriptionPlanVM[]>>{
    return this.http.get<ApiResponse<SubscriptionPlanVM[]>>(`${this.api}`);
  }

  getById(id: Number): Observable<ApiResponse<SubscriptionPlanVM>>{
    return this.http.get<ApiResponse<SubscriptionPlanVM>>(`${this.api}/${id}`);
  }
  add(subscriptionPlan: SubscriptionPlanModel): Observable<any>{
    return this.http.post(`${this.api}`,subscriptionPlan);
  }
  update(subscriptionPlan: SubscriptionPlanModel): Observable<any>{
    return this.http.put(`${this.api}/${subscriptionPlan.id}`,subscriptionPlan);
  }
  delete(id: Number): Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
