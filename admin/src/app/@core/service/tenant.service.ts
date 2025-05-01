import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { BookingFilterModel } from "../model/booking-filter-model";
import { BookingModel } from "../model/booking-model";
import { BookingPageModel } from "../model/booking-page-model";
import { BookingViewModel } from "../model/booking-view-model";
import { TenantModel, TenantViewModel } from "../model/tenant-view.model";
import { ApiResponse } from "../model/api-response.model";
@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private api: string = environment.apiUrl + "/tenant";
  constructor(private http: HttpClient){

  }

  getAll(): Observable<ApiResponse<TenantViewModel[]>>{
    return this.http.get<ApiResponse<TenantViewModel[]>>(`${this.api}`);
  }

  getTenantById(id: Number): Observable<ApiResponse<TenantViewModel>>{
    return this.http.get<ApiResponse<TenantViewModel>>(`${this.api}/${id}`);
  }
  addTenant(tenant: TenantModel): Observable<any>{
    return this.http.post(`${this.api}`,tenant);
  }
  updateTenant(tenant: TenantModel): Observable<any>{
    return this.http.put(`${this.api}/${tenant.id}`,tenant);
  }
  deleteTenant(id: Number): Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
