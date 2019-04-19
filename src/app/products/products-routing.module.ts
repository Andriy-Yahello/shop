import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent, ProductFormComponent } from './components';
import { NgModule } from '@angular/core';
import { ProductResolveGuard } from './guards';
import { CanDeactivateGuard } from '../core';

const routes: Routes = [
    {
      path: 'home',
      component: ProductListComponent
    },
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