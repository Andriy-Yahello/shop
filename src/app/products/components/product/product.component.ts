import { 
  Component, 
  ChangeDetectionStrategy, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { FeedBackModel } from '../../models/feedback.model';
import { CartProductListService } from '../../../core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent{

  constructor(
    private cartProductListService: CartProductListService){}
    
  @Input() product: ProductModel;

  @Output() changeProductAvailability = new EventEmitter<ProductModel>();
  @Output() editProduct = new EventEmitter<ProductModel>();
  @Output() productFeed = new EventEmitter<ProductModel>();
  @Output() productFeedbackList = new EventEmitter<Array<FeedBackModel>>();

  switchAvailability(){
    this.changeProductAvailability.emit(this.product);
  }

  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  showProductFeed()
  {
    this.productFeed.emit(this.product);
  }

  showProductFeedback(){
    this.productFeedbackList.emit(this.product.feedbackList);
  }

  addToCart(product: ProductModel){
    this.cartProductListService.addProduct(product);
  }
}
