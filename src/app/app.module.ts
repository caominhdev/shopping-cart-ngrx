import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './store/effects/product.effect';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SubtotalComponent } from './components/subtotal/subtotal.component';
import { QuantityComponent } from './components/quantity/quantity.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    LayoutComponent,
    SubtotalComponent,
    QuantityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([ProductEffect]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
