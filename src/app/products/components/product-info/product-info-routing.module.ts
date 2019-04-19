import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductInfoComponent } from './product-info.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductFeedbackListComponent } from ".";


const routes: Routes = [
    {path:'home', redirectTo: 'product/:productId/(details:details//feeds:feeds)', pathMatch: 'full'},
    {path:'product/:productId', component: ProductInfoComponent, children: 
    [
        {path: 'details', component: ProductDetailComponent, outlet: 'details'},
        {path: 'feeds', component: ProductFeedbackListComponent, outlet: 'feeds'}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductInfoRoutingModule { }