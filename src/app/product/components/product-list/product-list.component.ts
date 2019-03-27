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
  @Output() selectedProductsChange: EventEmitter<Array<ProductModel>> = new EventEmitter();
  
  
  constructor(private productService: ProductService, 
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: ProductModel){
    this.selectedProduct = product;
    this.cartService.addProductToCart(product);
    //this.cartService.announceMission(product);
    
    console.log(this.selectedProduct);
    this.listChange.push(this.selectedProduct);
    this.selectedProductsChange.emit(this.listChange);
    console.log(this.listChange);
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
