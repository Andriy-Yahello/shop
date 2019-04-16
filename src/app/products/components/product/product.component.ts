import { 
  Component, 
  ChangeDetectionStrategy, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { FeedBackModel } from '../../models/feedback.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{
  @Input() product: ProductModel;

  @Output() changeProductAvailability = new EventEmitter<ProductModel>();
  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() productFeedbackList = new EventEmitter<Array<FeedBackModel>>();

  switchAvailability(){
    this.changeProductAvailability.emit(this.product);
  }

  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  showProductFeedback(){
    this.productFeedbackList.emit(this.product.feedbackList);
  }
}
