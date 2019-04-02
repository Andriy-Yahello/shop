import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product';
import { Category } from 'src/app/product/enums/category';


@Injectable({
  providedIn: 'root'
})
export class ProductService{
  getProducts() {
    return [
      new ProductModel("ball", "playing ball", 400, Category.New, true, 1),
      new ProductModel("desk", "computer desk", 500, Category.Popular, true, 1),
      new ProductModel("console", "playstation playing console", 300, Category.Popular, true, 1),
      new ProductModel("pen", "regular writing pen", 400, Category.BestSeller, true, 1),
      new ProductModel("pencil", "Slim Line Sharp Dark", 400, Category.BestSeller, false, 0)
    ];
  }

  constructor() { }
}
