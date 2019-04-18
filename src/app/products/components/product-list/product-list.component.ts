import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductArrayService } from '../../services/product-array.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Array<ProductModel>>;

  constructor(
    private router: Router,
    private productArrayService: ProductArrayService) { }

  ngOnInit() {
    this.products = this.productArrayService.getProducts();
  }

  onChangeProductStatus(product: ProductModel): void {
    const updatedProduct = { ...product, available: false };
    this.productArrayService.updateProduct(updatedProduct);
  }

  onEditProduct(product: ProductModel): void {
    const link = ['/edit', product.id];
    this.router.navigate(link);
  }

  showFeed(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
