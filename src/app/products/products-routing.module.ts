import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent, ProductFormComponent } from './components';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'home',
        component: ProductListComponent
    },
    {
      path: 'edit/:productId',
      component: ProductFormComponent
    }  
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProductsRoutingModule { }