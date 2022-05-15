import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { Product } from 'src/app/helpers/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import * as fromActions from '../actions';
@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {

  }

  products$ = createEffect(() =>
  this.actions$.pipe(
    ofType(fromActions.loadProduct),
    mergeMap(() => this.productService.getProducts().pipe(
      map((data) => {
        const products = <Product[]>data['product'].map((item: Product) =>
        ({ ...item, orders: { count: 0, price: 0 } }));
        return fromActions.loadProductSuccess({ payload: products });
      }),
      catchError((error) => of(fromActions.loadProductFailure({ error })))
    )),
  )
);
}
