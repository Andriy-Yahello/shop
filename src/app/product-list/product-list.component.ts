import { EventEmitter, Component, OnInit, Output, HostListener } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [CartService]
})
export class ProductListComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct: ProductModel;
  listChange: any = [];
  @Output() selectedProductsChange: EventEmitter<ProductModel> = new EventEmitter();
  
  
  constructor(private productService: ProductService, 
    private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  @HostListener('click')
  addToCart(product: ProductModel){
    this.selectedProduct = product;
    
    this.cartService.addProductToCart(product);
    
    this.cartService.announceMission(product);
    
    console.log(this.selectedProduct);
    this.listChange.push(this.selectedProduct);
    this.selectedProductsChange.emit(this.listChange);
    console.log(this.listChange);
  }



}
