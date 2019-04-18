import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductInfoComponent } from "./product-info.component";
import { ProductInfoRoutingModule } from "./product-info-routing.module";
import { ProductDetailComponent, ProductFeedbackListComponent } from ".";

@NgModule({
    declarations: [
      ProductInfoComponent,
        ProductDetailComponent,
    ProductFeedbackListComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ProductInfoRoutingModule
    ]
  })
  export class ProductInfoModule { }