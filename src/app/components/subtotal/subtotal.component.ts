import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/product.reducers';
import * as fromReducers from "src/app/store/reducers";
import { Cart, Product } from 'src/app/helpers';

@Component({
  selector: 'app-subtotal',
  templateUrl: './subtotal.component.html',
  styleUrls: ['./subtotal.component.scss']
})
export class SubtotalComponent implements OnInit {
  public cart : Cart | null= null;
  public subtotal: number | null = null;
  public cartItems: Product[] | null = null;

  constructor( public store: Store<State>) { }

  ngOnInit(): void {
    this.getState();
  }
  getState() {
    this.store.select(fromReducers.selectCart).subscribe({
      next: res => {
        this.cart = res;
        this.cartItems = this.cart.items;
        this.subtotal = this.cartItems.reduce((acc, curr) => (acc += curr.orders.price), 0);
      }
    })
  }
}
