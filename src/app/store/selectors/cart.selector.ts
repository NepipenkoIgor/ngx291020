import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState } from '@ngrx/entity';
import { cartAdapter, ICartProduct } from '../reducers/сart.reducer';
import { selectUser } from './user.selector';
import { IUser } from '../reducers/user.reducer';

export const {selectAll} = cartAdapter.getSelectors();
export const selectCart = createFeatureSelector<EntityState<ICartProduct>>('cart');

export const selectProductInCart = createSelector(selectCart, selectAll);


export const totalProducts = createSelector(
  selectProductInCart,
  (products: ICartProduct[]) => {
    return products.reduce((count, product) => {
      return (count += product.count);
    }, 0);
  });


export const cartProductsWithBonusesAndPrice = createSelector(
  selectProductInCart,
  selectUser,
  (products: ICartProduct[], user: IUser) => {
    return products.map((product: ICartProduct) => {
      return {...product, price: product.count * product.price * user.bonuses};
    });
  }
);
