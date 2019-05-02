import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productAdapter, ProductsState } from './products.state';
import { ProductModel } from '../../../products/models/product.model';
import { getRouterState } from '../router';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const {
    selectEntities: getProductsEntities,
    selectAll: getProductsData
} = productAdapter.getSelectors(getProductsState);

export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);

export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const getSelectedProductByUrl = createSelector(
    getProductsEntities,
    getRouterState,
    (products, router): ProductModel => {
        console.log(router.state.params);
        const productId = router.state.params.productId;
        if (productId) {
            return products[productId];
        } else {
            return new ProductModel();
        }
});
