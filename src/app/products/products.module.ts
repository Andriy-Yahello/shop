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
import { ProductsEffects, productsReducer } from '../core/+store/products';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

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
    StoreModule.forFeature('products', productsReducer),
    ProductsRoutingModule,
    ProductsServicesModule,
    EffectsModule.forFeature([ProductsEffects])
  ]
})
export class ProductsModule { }
