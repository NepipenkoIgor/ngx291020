import productsReducer, { IProductsState } from './reducers/products.reducer';
import cartReducer, { ICartProduct } from './reducers/сart.reducer';
import { EntityState } from '@ngrx/entity';
import userReducer, { IUser } from './reducers/user.reducer';

export interface IRootState {
  products: IProductsState;
  cart: EntityState<ICartProduct>;
  user: IUser
}

export const reducers = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
};
