import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map } from 'rxjs/operators';
import { IProduct } from '../products.service';

@Injectable()
export class OneProductResolverService implements Resolve<IProduct | null> {

  public constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot): Observable<IProduct | null> {
    // this.spinnerService.start()
    return this.http.get<IProduct | null>(`/products/${route.paramMap.get('id')}`)
      .pipe(
        delay(5000),
        map((product: IProduct | null) => {
          // this.spinnerService.end()
          if (!product) {
            this.router.navigate(['/backoffice']);
          }
          return product;
        }),
        catchError(() => {
          // this.spinnerService.end()
          this.router.navigate(['/backoffice']);
          return of(null);
        })
      );
  }

}
