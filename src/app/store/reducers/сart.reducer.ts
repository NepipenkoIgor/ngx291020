import { Action, createReducer, on } from '@ngrx/store';
import { IProduct } from './products.reducer';
import { createEntityAdapter } from '@ngrx/entity';
import { addProductToCart, decrementProductInCart, incrementProductInCart, removeProductFromCart } from '../actions/cart.actions';

export interface ICartProduct extends IProduct {
  count: number;
}

export const cartAdapter = createEntityAdapter({
  selectId: (product: ICartProduct) => product._id
});


const initialState = cartAdapter.getInitialState();

const reducer = createReducer(
  initialState,
  // tslint:disable-next-line:variable-name
  on(addProductToCart, (state, {product}) => {
    const entity = state.entities[product._id] as ICartProduct;
    return cartAdapter.upsertOne({...product, count: entity ? ++entity.count : 1}, state);
  }),
  on(removeProductFromCart, (state, {id}) => {
    return cartAdapter.removeOne(id, state);
  }),
  on(incrementProductInCart, (state, {id}) => {
    const entity = state.entities[id] as ICartProduct;
    const count = entity.count + 1;
    return cartAdapter.updateOne({id, changes: {count}}, state);
  }),
  on(decrementProductInCart, (state, {id}) => {
    const entity = state.entities[id] as ICartProduct;
    const count = entity.count - 1;
    return cartAdapter.updateOne({id, changes: {count}}, state);
  }),
);

export default function cartReducer(state: any, action: Action): any {
  return reducer(state, action);
}
