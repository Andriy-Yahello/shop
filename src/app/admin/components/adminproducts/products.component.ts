import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';
import { ProductPromiseService } from '../../../products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Promise<Array<ProductModel>>;

  constructor(
    private router: Router,
    private productPromiseService: ProductPromiseService
  ) { }

  ngOnInit() {
    this.products = this.productPromiseService.getProducts();
  }

  onChangeProductStatus(product: ProductModel): void {
    this.updateProduct(product).catch(err => console.log(err));
  }

  onEditProduct(product: ProductModel): void {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);
  }

  onCreateProduct() {
    const link = ['admin/product/add'];
    this.router.navigate(link);
  }

  RemoveProductItem(product: ProductModel) {
    this.productPromiseService
      .deleteProduct(product)
      .then(() => (this.products = this.productPromiseService.getProducts()))
      .catch(err => console.log(err));
  }

  private async updateProduct(product: ProductModel) {
    const updatedProduct = await this.productPromiseService.updateProduct({
      ...product,
      available: !product.available
    });

    const products: ProductModel[] = await this.products;
    const index = products.findIndex(t => t.id === updatedProduct.id);
    products[index] = { ...updatedProduct };
  }
}
