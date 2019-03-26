import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService]
})
export class CartComponent implements OnInit {
  list: ProductModel[] = [];
  @HostBinding('class.is-open')
  i: ProductModel;
  subscription: Subscription;
  
  constructor(private cartService: CartService) { 
    console.log("j");
    // this.subscription = cartService.missionAnnounced$.subscribe(
    //   mission => {
    //     this.i = (mission);
    // });
    console.log(this.i);
  }

  ngOnInit() {
    console.log("j");
    this.cartService.change.subscribe(
      p => {
        this.i = p;
      }
    );
  }

}
