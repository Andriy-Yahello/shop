import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { ProductModel } from '../../products/models/product.model';
import { OrderModel } from '../models/order.model';


@Injectable({
  providedIn: CoreModule
})
export class CartProductListService {
  private productList: ProductModel[] = [];
  private currentOrder: ProductModel[] = [];
  private orderStatus: boolean = false;
  private ordersList: Array<OrderModel> = [];
  private count: number = 0;

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
    this.count++;
    this.Status = true;
    this.ordersList.push(new OrderModel(this.count, this.productList));
    this.currentOrder = this.productList;
    this.productList = [];
  }

    getOrder(): Array<ProductModel> {
      if (this.Status) 
          return this.currentOrder;
    }

    getOrders(): Array<OrderModel> {
        return this.ordersList;
    }

    public get Status():boolean {
        return this.orderStatus;
    }

    public set Status(status:boolean) {
        this.orderStatus = status;
    }
}