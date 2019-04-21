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
import { ProductResolveGuard } from '../products/guards';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
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
    canDeactivate: [CanDeactivateGuard],
      resolve: {
        product: ProductResolveGuard
      }
  },
  {
    path: 'product/add',
    component: AdminProductFormComponent,
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
export class AdminRoutingModule { }

export const adminRouterComponents = [
  AdminComponent, 
  ProductsComponent,
  AdminProductFormComponent,
  AdminDashboardComponent, 
  ProductsComponent, 
  ManageUsersComponent,
  OrdersComponent];
