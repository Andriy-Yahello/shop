import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { CartProductListService } from '../../../core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {

  constructor(
    private cartProductListService: CartProductListService) { }

  @Input() product: ProductModel;

  @Output() productDetails = new EventEmitter<ProductModel>();

  showProductDetails() {
    this.productDetails.emit(this.product);
  }

  addToCart(product: ProductModel) {
    this.cartProductListService.addProduct(product);
  }
}
