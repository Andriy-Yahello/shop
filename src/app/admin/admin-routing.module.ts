import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import {
  ManageUsersComponent,
  ProductsComponent,
  AdminDashboardComponent,
  OrdersComponent
 } from '.';
import { AuthGuard, CanDeactivateGuard } from '../core';
import { AdminProductFormComponent } from './components';
import { AdminProductResolveGuard } from './guards/admin-product-resolve.guard';
import { ProductsStatePreloadingGuard, ProductExistGuard } from '../products/guards';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [ProductsStatePreloadingGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'users', component: ManageUsersComponent },
          { path: 'products', component: ProductsComponent, children: [
            {path: '', component: ProductsComponent}]
          },
          { path: 'orders', component: OrdersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  },
  {
    path: 'product/edit/:productId',
    component: AdminProductFormComponent,
    canActivate: [ProductExistGuard],
    canDeactivate: [CanDeactivateGuard],
      resolve: {
        product: AdminProductResolveGuard
      }
  },
  {
    path: 'product/add',
    component: AdminProductFormComponent,
    canDeactivate: [CanDeactivateGuard],
      resolve: {
        product: AdminProductResolveGuard
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRouterComponents = [
  AdminComponent,
  ProductsComponent,
  AdminProductFormComponent,
  AdminDashboardComponent,
  ProductsComponent,
  ManageUsersComponent,
  OrdersComponent];
