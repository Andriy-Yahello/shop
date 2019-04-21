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
  @Output() productDetails = new EventEmitter<ProductModel>();

  switchAvailability(){
    this.changeProductAvailability.emit(this.product);
  }

  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  showProductDetails()
  {
    this.productDetails.emit(this.product);
  }

  addToCart(product: ProductModel){
    this.cartProductListService.addProduct(product);
  }
}
