import { Component, OnInit, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { ProductModel } from 'src/app/product/models/product';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() appCartList: any = [];
  serviceList: ProductModel[] = [];
  i:ProductModel;
  product: ProductModel;
  sum: number = 0;
  count: number = 0;
  subscription: Subscription;
  parentShowState: boolean = false;
  
  constructor(private cartService: CartService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.subscription = this.cartService.getProduct().subscribe(
      product => {
        this.i = product;
        this.serviceList.push(product);
        this.sum += product.price;
        this.count++;
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
    this.sum -= product.price * product.quantity;
    this.count -= product.quantity;
    this.localStorageService.removeItem(product);
  }

  selectItem(product: ProductModel){
    this.product = product;
    if (this.localStorageService.getItem(product) === undefined)
      this.localStorageService.setItem(product);
    console.log("saveToLocalStorage");
  }

  changeState(){
    this.parentShowState = !this.parentShowState;
  }

  updateTotalAndSum(product){
    this.sum += product.price * (product.quantity - 1);
    this.count += product.quantity - 1;
  }
}
