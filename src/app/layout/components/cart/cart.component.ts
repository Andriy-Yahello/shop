import { Component, OnInit } from '@angular/core';
import { CartProductListService } from '../../../core';
import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Array<ProductModel> = [];

  constructor(
    private cartProductListService: CartProductListService) { }

  ngOnInit() {
    this.cartList = this.cartProductListService.getProductList();
  }

  removeItem(product: ProductModel) {
    this.cartProductListService.removeFromCart(product);
    this.cartList = this.cartProductListService.getProductList();
  }

  completePurchase() {
    this.cartProductListService.buyProducts();
    this.cartList = [];
  }
}
