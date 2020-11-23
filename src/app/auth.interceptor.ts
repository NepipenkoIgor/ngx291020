import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { BASE_URL } from './config';
import { filter, map } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL) private baseUrl: string
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const newHeaders = req.headers.append('Content-Type', 'application/json')
      .append('Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImluZXBpcGVua28iLCJpYXQiOjE2MDA3MDg1MzJ9.Uch-jamBl7U9XF_m1riA9APROi_lO-mkDmnjjuv8Kv8');
    const jsonReq = req.clone({
      headers: newHeaders,
      url: `${this.baseUrl}${req.url}`
    });

    return next.handle(jsonReq)
      .pipe(
        filter<any>((event: HttpEvent<any>) => event instanceof HttpResponse),
        map((res: HttpResponse<any>) => {
          return res.clone({body: res.body?.data});
        })
      );
  }

}
