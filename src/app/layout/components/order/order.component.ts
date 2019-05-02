import { Component, OnInit } from '@angular/core';
import { CartProductListService } from 'src/app/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderList: Array<ProductModel> = [];

  constructor(
    private router: Router,
    private cartProductListService: CartProductListService) { }

  ngOnInit() {
      this.orderList = this.cartProductListService.getOrder();
  }

  getForm(){
    this.router.navigate(['processorder']);
  }
}
