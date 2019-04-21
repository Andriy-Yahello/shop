import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../core/models/order.model';
import { CartProductListService } from '../../../core/services/cart-product-list.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private orders: Array<OrderModel> = [];

  constructor(private cartProductListService: CartProductListService) { }

  ngOnInit() {
    this.orders = this.cartProductListService.getOrders();
  }
}
