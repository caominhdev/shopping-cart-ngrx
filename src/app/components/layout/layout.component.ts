import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReducers from  '../../store/reducers';
import { Observable } from 'rxjs';
import { Product } from 'src/app/helpers';
import { loadProduct , State} from 'src/app/store';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public $products : Observable<Product[]> = this.store.select(fromReducers.selectProducts)

  constructor(public store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(loadProduct())
  }
}
