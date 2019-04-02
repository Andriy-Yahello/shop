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
  @Output() updatedProductQuantity: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  shown: boolean = false;

  constructor() { }

  ngOnInit() {
    console.log("Update this.parentShowState"+this.parentShowState)
  }

  updateProduct(updatedProduct: {
    quantity: number;
  }): void {
    this.product.quantity = updatedProduct.quantity;
    this.shown = false;
    this.updatedProductQuantity.emit(this.product);
    this.showState.emit(this.shown);
  }
}
