import { Injectable, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ProductModel } from 'src/app/product/models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  // change: EventEmitter<ProductModel>;
  // product: ProductModel;
  private subject = new Subject<any>();

  
  // private missionAnnouncedSource    = new Subject<ProductModel>();

  // missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  // announceMission(mission: ProductModel) {
  //   this.missionAnnouncedSource.next(mission);
  // }

  // list: ProductModel[] = [];

  constructor() { 
    // this.change = new EventEmitter();
  }

  addProductToCart(product: ProductModel){
    this.subject.next(product);

    // this.product = product;

    // this.change.emit(product);
  }

  clearProduct() {
      this.subject.next();
  }

  getProduct(): Observable<any> {
      return this.subject.asObservable();
  }
}
