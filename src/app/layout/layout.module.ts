import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PathNotFoundComponent,
  CartComponent,
  LoginComponent,
  OrderComponent, 
  ProcessOrderComponent} from './components';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  declarations: [
    PathNotFoundComponent,
    CartComponent,
    ProcessOrderComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }
