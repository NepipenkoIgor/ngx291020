import { createAction, props } from '@ngrx/store';

export const getProductsPending = createAction('[Products module] pending products from server ');
export const getProductsSuccess =
  createAction('[Products module] set products from server', props<{products: any}>());
export const getProductsError = createAction('[Products module] error when retry products from server  ');


getProductsSuccess({products: []})
/*
  {
    type: '[Products module] set products from server',
    products: []
  }
 */
