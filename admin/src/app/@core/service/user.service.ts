import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { SubscriptionPlanModel, SubscriptionPlanVM } from "../model/subscription-plan";
import { UserModel, UserVM } from "../model/user";
import { ApiResponse } from "../model/api-response.model";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api: string = environment.apiUrl + "/user";
  constructor(private http: HttpClient){

  }

  getAll(): Observable<ApiResponse<UserVM[]>>{
    return this.http.get<ApiResponse<UserVM[]>>(`${this.api}`);
  }

  getById(id: Number): Observable<ApiResponse<UserVM>>{
    return this.http.get<ApiResponse<UserVM>>(`${this.api}/${id}`);
  }
  add(tenant: SubscriptionPlanModel): Observable<any>{
    return this.http.post(`${this.api}`,tenant);
  }
  update(booking: UserModel): Observable<any>{
    return this.http.put(`${this.api}`,booking);
  }
  delete(id: Number): Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
