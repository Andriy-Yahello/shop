import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PathNotFoundComponent,
  CartComponent,
  LoginComponent,
  OrderComponent, 
  ProcessOrderComponent} from './components';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ValidatorsModule } from '../validators/validators.module';

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
    ValidatorsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }
