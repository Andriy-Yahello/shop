import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductPromiseService } from '../../../products/services';
import { Action } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import { Observable } from 'rxjs';
import { switchMap, pluck, concatMap, map  } from 'rxjs/operators';
import { ProductModel } from '../../../products/models/product.model';
import { Router } from '@angular/router';
import * as RouterActions from './../router/router.actions';

@Injectable()
export class ProductsEffects {

  constructor(private actions$: Actions,
    // private router: Router,
    private productPromiseService: ProductPromiseService) {
    console.log('[PRODUCTS EFFECTS]');
  }

  @Effect()
  createProduct$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.CreateProduct>(ProductsActions.ProductsActionTypes.CREATE_PRODUCT),
      pluck('payload'),
      concatMap((payload: ProductModel) =>
        this.productPromiseService
          .createProduct(payload)
          .then(product => new ProductsActions.CreateProductSuccess(product))
          // .then(product => {
          //   console.log('createProduct')
          //   this.router.navigate(['admin/products']);
          //   return new ProductsActions.CreateProductSuccess(product);
          // })
          .catch(err => new ProductsActions.CreateProductError(err))
      )
  );

  @Effect()
  createUpdateProductSuccess$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.CreateProductSuccess | ProductsActions.UpdateProductSuccess>(
      ProductsActions.ProductsActionTypes.CREATE_PRODUCT_SUCCESS,
      ProductsActions.ProductsActionTypes.UPDATE_PRODUCT_SUCCESS
    ),
    map(
      action =>
        new RouterActions.Go({
          path: ['admin/products']
        })
    )
  );


  @Effect()
  getProducts$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.GetProducts>(ProductsActions.ProductsActionTypes.GET_PRODUCTS),
    switchMap((action: ProductsActions.GetProducts) =>
      this.productPromiseService
        .getProducts()
        .then(products => new ProductsActions.GetProductsSuccess(products))
        .catch(err => new ProductsActions.GetProductsError(err))
    )
  );

  // @Effect()
  // getProduct$: Observable<Action> = this.actions$.pipe(
  //   ofType<ProductsActions.GetProduct>(ProductsActions.ProductsActionTypes.GET_PRODUCT),
  //   pluck('payload'),
  //   switchMap(payload =>
  //     this.productPromiseService
  //       .getProduct(+payload)
  //       .then(product => new ProductsActions.GetProductSuccess(product))
  //       .catch(err => new ProductsActions.GetProductError(err))
  //   )
  // );

  @Effect()
  updateProduct$: Observable<Action> = this.actions$.pipe(
      ofType<ProductsActions.UpdateProduct>(ProductsActions.ProductsActionTypes.UPDATE_PRODUCT),
      pluck('payload'),
      concatMap((payload: ProductModel) =>
        this.productPromiseService
          .updateProduct(payload)
          .then(product => new ProductsActions.UpdateProductSuccess(product))
          // .then(product => {
          //   this.router.navigate(['admin/products']);
          //   return new ProductsActions.UpdateProductSuccess(product);
          // })
          .catch(err => new ProductsActions.UpdateProductError(err))
      )
  );

  @Effect()
  deleteProduct$: Observable<Action> = this.actions$.pipe(
    ofType<ProductsActions.DeleteProduct>(ProductsActions.ProductsActionTypes.DELETE_PRODUCT),
    pluck('payload'),
    concatMap((payload: ProductModel) =>
      this.productPromiseService
        .deleteProduct(payload)
        .then(
          () => {
            return new ProductsActions.DeleteProductSuccess(payload);
          }
        )
        .catch(err => new ProductsActions.DeleteProductError(err))
    )
  );

}
