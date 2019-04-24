import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ProductsModule } from './products/products.module';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ProductInfoModule } from './products/components/product-info/product-info.module';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { RequestTimeInterceptor } from './core/interceptors/request-time.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    LayoutModule,
    SharedModule,
    CoreModule,
    ProductInfoModule,
    ProductsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestTimeInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
