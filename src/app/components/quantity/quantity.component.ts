import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/helpers';
import { addToCart, removeFromCart , State } from 'src/app/store';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.scss']
})
export class QuantityComponent {

  @Input('product') item: Product | null = null;

  constructor(private store: Store<State>) { }

  increment()
  {
    this.store.dispatch(addToCart({ payload: <Product>this.item }))
  }
  decrement()
  {
    this.store.dispatch(removeFromCart({ payload: <Product>this.item }))
  }
}
