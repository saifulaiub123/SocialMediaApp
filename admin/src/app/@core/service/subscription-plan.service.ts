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
  add(tenant: SubscriptionPlanModel): Observable<any>{
    return this.http.post(`${this.api}`,tenant);
  }
  update(booking: SubscriptionPlanModel): Observable<any>{
    return this.http.put(`${this.api}`,booking);
  }
  delete(id: Number): Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
