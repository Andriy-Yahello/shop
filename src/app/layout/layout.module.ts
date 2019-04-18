import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  PathNotFoundComponent, 
  FeedsComponent, 
  CartComponent, 
  LoginComponent,
  OrderComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PathNotFoundComponent,  
    CartComponent,
    OrderComponent,
    FeedsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class LayoutModule { }
