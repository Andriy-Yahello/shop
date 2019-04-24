import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsServicesModule } from './products-services.module';
import {
  ProductListComponent,
  ProductComponent,
  ProductFormComponent,
} from './components';
import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
    ProductsServicesModule
  ]
})
export class ProductsModule { }
