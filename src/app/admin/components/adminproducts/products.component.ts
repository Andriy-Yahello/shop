import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../products/models/product.model';
import { ProductPromiseService } from '../../../products';
import { Observable } from 'rxjs';
import { ProductsState, AppState, getProductsState, getProductsData, getProductsError } from '../../../core/+store';
import { Store, select } from '@ngrx/store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products: Promise<Array<ProductModel>>;
  // productsState$: Observable<ProductsState>;
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string>;

  constructor(
    // private router: Router,
    // private productPromiseService: ProductPromiseService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.productsState$ = this.store.pipe(select('products'));
    // this.products = this.productPromiseService.getProducts();
    // this.productsState$ = this.store.pipe(select(getProductsState));
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  onChangeProductStatus(product: ProductModel): void {
    const switchedProductStatus = {...product, available: !product.available};
    this.store.dispatch(new ProductsActions.UpdateProduct(switchedProductStatus));

    // this.store.dispatch(new ProductsActions.SwitchProductAvailvabliy(product));
    // this.updateProduct(product).catch(err => console.log(err));
  }

  onEditProduct(product: ProductModel): void {
     const link = ['admin/product/edit', product.id];
    // this.router.navigate(link);
    this.store.dispatch(new RouterActions.Go({
      path: link
    }));

  }

  onCreateProduct() {
    // const link = ['admin/product/add'];
    // this.router.navigate(link);
    this.store.dispatch(new RouterActions.Go({
      path: ['admin/product/add']
    }));
  }

  removeProductItem(product: ProductModel) {
    this.store.dispatch(new ProductsActions.DeleteProduct(product));
    // this.productPromiseService
    //   .deleteProduct(product)
    //   .then(() => (this.products = this.productPromiseService.getProducts()))
    //   .catch(err => console.log(err));
  }

  // private async updateProduct(product: ProductModel) {
  //   const updatedProduct = await this.productPromiseService.updateProduct({
  //     ...product,
  //     available: !product.available
  //   });

  //   const products: ProductModel[] = await this.products;
  //   const index = products.findIndex(t => t.id === updatedProduct.id);
  //   products[index] = { ...updatedProduct };
  // }
}
