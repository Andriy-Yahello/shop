import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { Category } from '../enums/categoty.enum';
import { FeedBackModel } from '../models/feedback.model';
import { ProductsServicesModule } from '../products-services.module';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

//        public id: number = null,
//         public name:string = '', 
//         public description: string=  '',
//         public price:number = 0, 
//         public category:Category = Category.BestSeller,
//         public available: boolean = false,
//         public quantity: number = 0,
//         public updated: Date = new Date(),
//         public feedbackList: FeedBackModel[] = []

const productList: Array<ProductModel> =  [
  new ProductModel(1, 'Ball', 'Official NBA Street Basketball, Size 6 (28.5")', 10, Category.BestSeller, true, 5, new Date(2019, 1, 28), [new FeedBackModel(1,1, 'good'), new FeedBackModel(2,1, 'I like it')]),
  new ProductModel(2, 'pen', 'Genuine Cross brand pens', 2, Category.New, true, 15, new Date(2019, 2, 22), [new FeedBackModel(3,2, 'nice'), new FeedBackModel(4,2, 'I love it')]),
  new ProductModel(3, 'sneakers', 'The super-comfortable Energy Afterburn Sneaker', 6, Category.Popular, true, 20, new Date(2019, 3, 5), [new FeedBackModel(5,3, 'soft'), new FeedBackModel(5,6, 'I will buy it next time')])
];

const productListPromise: Observable<Array<ProductModel>> = of(productList);

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductArrayService {

  getProducts(): Observable<ProductModel[]> {
    return productListPromise;
  }

  getProduct(id: number | string): Observable<ProductModel> {
    return this.getProducts().pipe(
        map((products: Array<ProductModel>) => products.find(product => product.id === +id)),
        catchError(err => throwError('Error in getProduct method'))
      );
  }

  createProduct(product: ProductModel): void {
    productList.push(product);
  }

  updateProduct(product: ProductModel): void {
    const i = productList.findIndex(p => p.id === product.id);

    if (i > -1) {
      productList.splice(i, 1, product);
    }
  }

  deleteProduct(product: ProductModel): void {
    const i = productList.findIndex(t => t.id === product.id);

    if (i > -1) {
      productList.splice(i, 1);
    }
  }
}
