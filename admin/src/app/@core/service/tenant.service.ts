import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { BookingFilterModel } from "../model/booking-filter-model";
import { BookingModel } from "../model/booking-model";
import { BookingPageModel } from "../model/booking-page-model";
import { BookingViewModel } from "../model/booking-view-model";
import { TenantViewModel } from "../model/tenant-view.model";
@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private api: string = environment.apiUrl + "/tenant";
  constructor(private http: HttpClient){

  }

  getInitialPageData(): Observable<BookingPageModel>{
    return this.http.get<BookingPageModel>(`${this.api}/GetInitialPageData`);
  }
  getAll(): Observable<TenantViewModel[]>{
    return this.http.get<TenantViewModel[]>(`${this.api}`);
  }
  getBookingsByFilter(filter: BookingFilterModel): Observable<any>{
    return this.http.post(`${this.api}/GetBookingsByFilter`,filter);
  }
  getBookingsById(id: Number): Observable<BookingViewModel>{
    return this.http.get<BookingViewModel>(`${this.api}/GetBookingById?id=`+id);
  }
  getBookingsByOperationId(operationId: Number): Observable<BookingViewModel[]>{
    return this.http.get<BookingViewModel[]>(`${this.api}/GetBookingsByOperationId?operationId=`+operationId);
  }
  addBooking(booking: BookingModel): Observable<any>{
    return this.http.post(`${this.api}/AddBooking`,booking);
  }
  updateBooking(booking: BookingModel): Observable<any>{
    return this.http.patch(`${this.api}/UpdateBooking`,booking);
  }
  deleteTenant(id: Number): Observable<any>{
    return this.http.delete<any>(`${this.api}/${id}`);
  }
}
