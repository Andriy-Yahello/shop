import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsServicesModule } from './products-services.module';
import { 
  ProductListComponent, 
  ProductComponent, 
  ProductFormComponent, 
  ProductFeedbackListComponent,
  ProductDetailComponent,
  ProductInfoComponent} from './components';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductFormComponent, 
    ProductListComponent, 
    ProductComponent, 
    ProductDetailComponent,
    ProductInfoComponent,
    ProductFeedbackListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ProductsServicesModule
  ]
})
export class ProductsModule { }
