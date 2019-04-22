import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { FeedBackModel } from '../../../products/models/feedback.model';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent {

  @Input() product: ProductModel;

  @Output() changeProductAvailability = new EventEmitter<ProductModel>();
  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() productFeed = new EventEmitter<ProductModel>();
  @Output() removeProduct = new EventEmitter<ProductModel>();
  @Output() productFeedbackList = new EventEmitter<Array<FeedBackModel>>();

  switchAvailability() {
    this.changeProductAvailability.emit(this.product);
  }

  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  RemoveProduct() {
    this.removeProduct.emit(this.product);
  }
}
