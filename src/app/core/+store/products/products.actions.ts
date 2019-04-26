import { Action } from '@ngrx/store';
import { ProductModel } from '../../../products/models/product.model';

export enum ProductsActionTypes {
  // GET_PRODUCT = '[Products] GET_PRODUCT',
  // GET_PRODUCT_SUCCESS = '[Products] GET_PRODUCT_SUCCESS',
  // GET_PRODUCT_ERROR = '[Products] GET_PRODUCT_ERROR',
  
  CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
  CREATE_PRODUCT_SUCCESS = '[Products] CREATE_PRODUCT_SUCCESS',
  CREATE_PRODUCT_ERROR   = '[Products] CREATE_PRODUCT_ERROR',
  
  UPDATE_PRODUCT= '[Products] UPDATE_PRODUCT',
  UPDATE_PRODUCT_SUCCESS = '[Products] UPDATE_PRODUCT_SUCCESS',
  UPDATE_PRODUCT_ERROR   = '[Products] UPDATE_PRODUCT_ERROR',
  
  DELETE_PRODUCT = '[Products] DELETE_PRODUCT',
  DELETE_PRODUCT_SUCCESS = '[Products] DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_ERROR = '[Products] DELETE_PRODUCT_ERROR',
  
  // SWITCH_PRODUCT_AVAILABLITY = '[Products] SWITCH_PRODUCT_AVAILABLITY',
  
  GET_PRODUCTS = '[Products] GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR   = '[Products] GET_PRODUCTS_ERROR'
}

export class CreateProductSuccess implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT_SUCCESS;
  constructor(public payload: ProductModel) { }
}

export class CreateProductError implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT_ERROR;
  constructor(public payload: Error | string) { }
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_SUCCESS;
  constructor(public payload: ProductModel) { }
}

export class UpdateProductError implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT_ERROR;
  constructor(public payload: Error | string) { }
}

// export class GetProduct implements Action {
//   readonly type = ProductsActionTypes.GET_PRODUCT;
//   constructor(public payload: number) { }
// }

// export class GetProductSuccess implements Action {
//   readonly type = ProductsActionTypes.GET_PRODUCT_SUCCESS;
//   constructor(public payload: ProductModel) { }
// }

// export class GetProductError implements Action {
//   readonly type = ProductsActionTypes.GET_PRODUCT_ERROR;
//   constructor(public payload: Error | string) { }
// }

export class GetProductsSuccess implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;
  constructor(public payload: ProductModel[]) { }
}

export class GetProductsError implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;
  constructor(public payload: Error | string) { }
}

// export class SwitchProductAvailvabliy implements Action {
//   readonly type = ProductsActionTypes.SWITCH_PRODUCT_AVAILABLITY;
//   constructor(public payload: ProductModel) { }
// }

export class GetProducts implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS;
}

export class CreateProduct implements Action {
  readonly type = ProductsActionTypes.CREATE_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class UpdateProduct implements Action {
  readonly type = ProductsActionTypes.UPDATE_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class DeleteProduct implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload: ProductModel) { }
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: ProductModel) { }
}

export class DeleteProductError implements Action {
  readonly type = ProductsActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload: Error | string) { }
}

export type ProductsActions
  = GetProducts
  | CreateProduct
  | CreateProductSuccess
  | CreateProductError
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductError
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductError
  // | SwitchProductAvailvabliy
  | GetProductsSuccess
  | GetProductsError;
  // | GetProduct
  // | GetProductSuccess
  // | GetProductError;
