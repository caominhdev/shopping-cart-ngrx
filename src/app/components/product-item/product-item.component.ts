import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/helpers';
import { State } from 'src/app/store';
import *  as fromReduders from "src/app/store/reducers";


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input('data-product') product: Product | null = null;
  constructor(private store: Store<State>) { }
  ngOnInit(): void {
    this.getCartItemState();
  }
  getCartItemState() {
    this.store.select(fromReduders.selectCartProduct(this.product)).subscribe({
      next : (res) =>
      {
        if(res && Object.keys(res).length) {
          this.product = res;
        }
      }
    })
  }


}
