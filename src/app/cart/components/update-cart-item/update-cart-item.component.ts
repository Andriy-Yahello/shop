import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductModel } from '../../../product/models/product';

@Component({
  selector: 'app-update-cart-item',
  templateUrl: './update-cart-item.component.html',
  styleUrls: ['./update-cart-item.component.css']
})
export class UpdateCartItemComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() parentShowState: boolean;
  @Output() showState: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log("Update this.parentShowState"+this.parentShowState)
  }

  updateProduct(updatedProduct: {
    quantity: number;
  }): void {
    this.product.quantity = updatedProduct.quantity;
    this.parentShowState = false;
    //this.showState.emit(this.parentShowState);
  }
}
