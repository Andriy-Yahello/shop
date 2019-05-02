import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product.model';
import { Observable } from 'rxjs';
import { AppState, getProductsData, getProductsError } from '../../../core/+store';
import { Store, select } from '@ngrx/store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
  }

  onChangeProductStatus(product: ProductModel): void {
    const switchedProductStatus = {...product, available: !product.available};
    this.store.dispatch(new ProductsActions.UpdateProduct(switchedProductStatus));
  }

  onEditProduct(product: ProductModel): void {
    const link = ['admin/product/edit', product.id];

    this.store.dispatch(new RouterActions.Go({
      path: link
    }));

  }

  onCreateProduct() {
    this.store.dispatch(new RouterActions.Go({
      path: ['admin/product/add']
    }));
  }

  removeProductItem(product: ProductModel) {
    this.store.dispatch(new ProductsActions.DeleteProduct(product));
  }
}
