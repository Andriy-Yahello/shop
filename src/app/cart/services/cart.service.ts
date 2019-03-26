import { Injectable, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  @Output() change: EventEmitter<ProductModel> = new EventEmitter();
  product: ProductModel;
  
  private missionAnnouncedSource    = new Subject<ProductModel>();

  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  announceMission(mission: ProductModel) {
    this.missionAnnouncedSource.next(mission);
  }

  // list: ProductModel[] = [];

  constructor() { }

  addProductToCart(product: ProductModel){
    this.product = product;
    this.change.emit(product);
  }
}
