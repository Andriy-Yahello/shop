import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductArrayService } from '../../services/product-array.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

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
}
