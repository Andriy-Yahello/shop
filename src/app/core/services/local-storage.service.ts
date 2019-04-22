import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

    saveToLocalStorage(key: string, oreders: Array<OrderModel>) {
      localStorage.setItem(key, JSON.stringify(oreders));
    }

    getFromLocalStorage(key: string) {
      return JSON.parse(localStorage.getItem(key));
    }

    addToLocalStorage(key: string, order: OrderModel) {
      const items = this.getFromLocalStorage(key);
      items.push(order);
      this.saveToLocalStorage(key, items);
    }
}
