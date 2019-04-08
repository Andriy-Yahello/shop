import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(productModel: ProductModel){
    localStorage.setItem(productModel.name, JSON.stringify(productModel));
  }

  getItem(productModel: ProductModel){
    localStorage.getItem(productModel.name);
  }

  removeItem(productModel: ProductModel){
    localStorage.removeItem(productModel.name);
  }
}
