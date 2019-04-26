import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { ProductPromiseService } from '../../services';
import { Store, select } from '@ngrx/store';
import { AppState, ProductsState, getProductsState, getProductsData, getProductsError } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // products: Observable<Array<ProductModel>>;
  // productsState$: Observable<ProductsState>;
  products$: Observable<ReadonlyArray<ProductModel>>;
  productsError$: Observable<Error | string>;

  constructor(
    private router: Router,
    private productPromiseService: ProductPromiseService,
    private store: Store<AppState>) { }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    // this.productsState$ = this.store.pipe(select('products'));
    //this.products = from(this.productPromiseService.getProducts());
    // this.productsState$ = this.store.pipe(select(getProductsState));
    this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
    this.store.dispatch(new ProductsActions.GetProducts());
  }

  showFeed(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
