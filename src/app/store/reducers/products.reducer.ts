import { Action, createReducer, on } from '@ngrx/store';
import { getProductsPending, getProductsSuccess } from '../actions/products.actions';

export interface IProduct {
  '_id': string;
  'title': string;
  'img': string;
  'price': number;
  'author': string;
  'isFavorite': boolean;
}

export interface IProductsState {
  items: IProduct[];
  isLoad: boolean;
}

const initialState: IProductsState = {
  items: [],
  isLoad: false
};

const reducer = createReducer(
  initialState,
  // tslint:disable-next-line:variable-name
  on(getProductsPending, (_state) => {
    return {..._state, isLoad: true};
  }),
  // tslint:disable-next-line:variable-name
  on(getProductsSuccess, (_state, {products}) => {
    return {..._state, isLoad: false, items: products};
  })
);

export default function productsReducer(state: any, action: Action): any {
  return reducer(state, action);
}
