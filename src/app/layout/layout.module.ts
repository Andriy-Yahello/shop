import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  PathNotFoundComponent, 
  CartComponent, 
  LoginComponent,
  OrderComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PathNotFoundComponent,  
    CartComponent,
    OrderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LayoutModule { }
