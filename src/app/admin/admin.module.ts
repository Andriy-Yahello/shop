import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { AdminProductFormComponent, AdminproductComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from '../core/+store';

@NgModule({
  declarations: [
    adminRouterComponents,
    AdminproductComponent,
    AdminProductFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('products', productsReducer),
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
