import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent, ProductFormComponent } from './components';
import { NgModule } from '@angular/core';
import { FeedsComponent } from '../layout';
import { ProductResolveGuard } from './guards';
import { CanDeactivateGuard } from '../core';

const routes: Routes = [
    {
      path: 'home',
      component: ProductListComponent
    },
    // {
    //   path: 'product-info',
    //   component: ProductInfoComponent,
    //   children:[
    //     {
    //       path: 'product-info',
    //       component: ProductDetailComponent,
    //       outlet: 'child1'
    //     },
    //     {
    //       path: 'product-info',
    //       component: ProductFeedbackListComponent,
    //       outlet: 'child2'
    //     },
    //   ]
    // },
    // {
    //   path: 'product/:productId',
    //   component: ProductFeedbackListComponent
    // },
   
    
    // {
    //   path: 'product/:productId',
    //   component: ProductComponent
    // },
    {
      path: 'edit/:productId',
      component: ProductFormComponent,
      canDeactivate: [CanDeactivateGuard],
        resolve: {
          product: ProductResolveGuard
        }
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }