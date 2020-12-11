import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { getProductsPending, getProductsSuccess } from '../actions/products.actions';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../reducers/products.reducer';

@Injectable()
export class ProductsEffects {

  getProductsPending$ = createEffect(() => this.actions$.pipe(
    ofType(getProductsPending),
    switchMap(() => this.http.get<IProduct[]>('/products')
      .pipe(
        map((products) => {
          return getProductsSuccess({products});
        }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
  ) {
  }
}
