import { Component, OnInit } from '@angular/core';
import { CartProductListService } from 'src/app/core';
import { ProductModel } from 'src/app/products/models/product.model';

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
    console.log('Test')
    this.cartList = this.cartProductListService.getProductList();
  }

  removeItem(product: ProductModel){
    this.cartProductListService.removeFromCart(product);
    this.cartList = this.cartProductListService.getProductList();
  }

  completePurchase(){
    console.log('completePurchase')
    this.cartProductListService.buyProducts();
    this.cartList = [];
  }
}
