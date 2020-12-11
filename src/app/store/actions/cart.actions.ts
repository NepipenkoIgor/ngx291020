import { createAction, props } from '@ngrx/store';
import { IProduct } from '../reducers/products.reducer';

export const addProductToCart = createAction('[Cart module] add product to cart', props<{product: IProduct}>());
export const removeProductFromCart = createAction('[Cart module] remove product from cart', props<{id: string}>());
export const incrementProductInCart = createAction('[Cart module] increment product in cart', props<{id: string}>());
export const decrementProductInCart = createAction('[Cart module] decrement product in cart', props<{id: string}>());
