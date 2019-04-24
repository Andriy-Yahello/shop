import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { OrderModel } from '../models/order.model';

@Injectable({
  providedIn: CoreModule
})
export class LocalStorageService {

    saveToLocalStorage(key: string, items: Array<any>) {
      localStorage.setItem(key, JSON.stringify(items));
    }

    getFromLocalStorage(key: string) {
      return JSON.parse(localStorage.getItem(key));
    }

    addToLocalStorage(key: string, item: any) {
      const items = this.getFromLocalStorage(key);
      items.push(item);
      this.saveToLocalStorage(key, items);
    }
}
