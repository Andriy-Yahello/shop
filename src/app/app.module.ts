import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/product/product.component';
import { ProductListComponent } from './product/components/product-list/product-list.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { UpdateCartItemComponent } from './cart/components/update-cart-item/update-cart-item.component';
import { CardHoverDirective } from './cart/directives/card-hover.directive';
import { ContactUsComponent } from './cart/components/contact-us/contact-us.component';
import { ChangeDirective } from './cart/directives/change.directive';
import { CoreModule } from './cart/modules/core/core.module';
import { SharedModule } from './cart/modules/shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    UpdateCartItemComponent,
    CardHoverDirective,
    ContactUsComponent,
    ChangeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
