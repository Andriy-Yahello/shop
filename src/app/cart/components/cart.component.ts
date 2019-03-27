import { Component, OnInit, Input, HostBinding } from '@angular/core';

import { Subscription, Subject } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() appCartList: any = [];
  @HostBinding('class.is-open')
  i: any;
  subscription: Subscription;
  refresh: Subject<any> = new Subject();
  
  constructor(private cartService: CartService) { 
    
  }

  ngOnInit() {
    console.log("j");
    this.subscription = this.cartService.getProduct().subscribe(
      product => {
        this.i = product;
    });
    console.log("this.i"+this.i);
    // console.log("j");
    // this.cartService.change.subscribe(
    //   p => {
    //     this.i = p;
    //     console.log("p "+p);
    //   }
    // );
    // console.log("i "+this.i);
   // this.refresh.next();
  }

  get GetProduct(){
    return this.cartService.getProduct();
  }
  
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
