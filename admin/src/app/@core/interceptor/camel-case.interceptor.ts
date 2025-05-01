import { HttpHandler, HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { HttpEvent, HttpRequest, HttpHandlerFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import camelcaseKeys from 'camelcase-keys';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class CamelCaseInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse && event.body && this.isJsonResponse(event)) {
          const camelCasedBody = camelcaseKeys(event.body.data as Record<string, unknown>, { deep: true });
          return event.clone({ body: camelCasedBody });
        }
        return event;
      })
    );
  }

  private isJsonResponse(response: HttpResponse<any>): boolean {
    const contentType = response.headers.get('Content-Type');
    return contentType?.includes('application/json') ?? false;
  }
}
