import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct: ProductModel;
  listChange: ProductModel[] = [];
  sum: number = 0;
  @Output() selectedProductsChange: EventEmitter<Array<ProductModel>> = new EventEmitter();
  @Output() selectedCartItem: EventEmitter<ProductModel> = new EventEmitter();
  
  constructor(private productService: ProductService, 
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: ProductModel){
    this.selectedCartItem.emit(product);
    this.selectedProduct = product;
    this.cartService.addProductToCart(product);
    //this.cartService.announceMission(product);
    this.sum += product.price;
    
    console.log(this.selectedProduct);
    this.listChange.push(this.selectedProduct);
    this.selectedProductsChange.emit(this.listChange);
    console.log(this.listChange);
  }

  isInvalid(product: ProductModel) {
      return !product.available;
  }

  removeFromCart(product: ProductModel){
    this.selectedProduct = product;
    const index = this.listChange.indexOf(this.selectedProduct, 0);
    if (index > -1) {
      this.listChange.splice(index, 1);
    }
    this.selectedProductsChange.emit(this.listChange);
  }
}
