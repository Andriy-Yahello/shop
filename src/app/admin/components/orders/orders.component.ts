import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../core/models/order.model';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  private orders: Array<OrderModel> = [];

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.orders = this.localStorageService.getFromLocalStorage('orders');
  }
}
