import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { 
  ManageUsersComponent, 
  ProductsComponent, 
  AdminDashboardComponent,
  OrdersComponent
 } from '.';
import { AuthGuard } from '../core';

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
          { path: 'products', component: ProductsComponent },
          { path: 'orders', component: OrdersComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

export const adminRouterComponents = [
  AdminComponent, 
  AdminDashboardComponent, 
  ProductsComponent, 
  ManageUsersComponent,
  OrdersComponent];
