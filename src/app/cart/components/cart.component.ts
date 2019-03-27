import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { CartService } from '../services/cart.service';
import { ProductModel } from 'src/app/product/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() appCartList: any = [];
  serviceList: ProductModel[] = [];
  i: any;
  subscription: Subscription;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.getProduct().subscribe(
      product => {
        this.i = product;
        this.serviceList.push(product);
    });
  }

  get GetProduct(){
    return this.cartService.getProduct();
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  removeFromList(product: ProductModel){
    const index = this.serviceList.indexOf(product, 0);
    if (index > -1) {
      this.serviceList.splice(index, 1);
    }
  }
}
