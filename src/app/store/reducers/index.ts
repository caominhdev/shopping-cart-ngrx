import { ActionReducerMap, createSelector, MetaReducer } from "@ngrx/store";
import { Cart } from "src/app/helpers/models/product.model";
import { State } from "./product.reducers";
import * as fromReducer from "./product.reducers";
import { environment } from "src/environments/environment";

export const selectStore = (state: State) => state;
export const selectProducts = (state: State) => state.products.data;
export const selectCart = (state: State) => state.cart;
export const selectCartItems = (state: State) => state.cart.items;
export const selectCartTotal = (state: State) => state.cart.items.reduce((prev, curr) => (prev += curr.orders.price), 0);

export const selectProduct = (props: any) => (
  createSelector(
    selectProducts,
    (state) => state.find((product) => product.id === props.id)
  )
);

export const selectCartProduct = (props: any) => (
  createSelector(
    selectCart,
    (state: Cart) => state.records.find((product) => product.id === props.id)
  )
);

export const reducers: ActionReducerMap<fromReducer.State> = {
  products: fromReducer.productReducer,
  cart: fromReducer.cartReducer,
};

export const metaReducers: MetaReducer<fromReducer.State>[] = !environment.production ? [] : [];
