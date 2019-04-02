import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { UpdateCartItemComponent } from './cart/components/update-cart-item/update-cart-item.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    UpdateCartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
