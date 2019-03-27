import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import { Category } from '../enums/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  getProducts() {
    return [
      new ProductModel("ball", "playing ball", 400, Category.New),
      new ProductModel("desk", "computer desk", 500, Category.Popular),
      new ProductModel("console", "playstation playing console", 300, Category.Popular),
      new ProductModel("pen", "regular writing pen", 400, Category.BestSeller)
    ];
  }

  constructor() { }
}
