import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { ProductModel } from 'src/app/products/models/product.model';

@Injectable({
  providedIn: CoreModule
})
export class CartProductListService {
  private productList: ProductModel[] = [];
  private orderStatus: boolean = false;

  addProduct(product: ProductModel): void {
    this.productList.unshift(product);
  }

  getProductList(): Array<ProductModel> {
    return this.productList;
  }

  removeFromCart(product: ProductModel){
    const index = this.productList.indexOf(product, 0);
    if (index > -1) {
      this.productList.splice(index, 1);
    }
  }

  clearCart(){
    this.productList = [];
  }

  buyProducts(){
    this.Status = true;
    // this.clearCart();
  }

    getOrder(): Array<ProductModel> {
        if (this.Status) 
            return this.getProductList();
    }

    public get Status():boolean {
        return this.orderStatus;
    }

    public set Status(status:boolean) {
        this.orderStatus = status;
    }
}