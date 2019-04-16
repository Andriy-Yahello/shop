import { 
  Component, 
  ChangeDetectionStrategy, 
  Input, 
  Output, 
  EventEmitter } from '@angular/core';
import { ProductModel } from '../../models/product.model';

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

  switchAvailability(){
    this.changeProductAvailability.emit(this.product);
  }

  onEditProduct() {
    this.editProduct.emit(this.product);
  }
}
