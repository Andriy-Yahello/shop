import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProductModel } from '../../../products/models/product.model';
import { DialogService, AutoUnsubscribe } from '../../../core';
import { Store, select } from '@ngrx/store';
import { AppState, getSelectedProductByUrl } from './../../../core/+store';
import * as ProductsActions from './../../../core/+store/products/products.actions';
import * as RouterActions from './../../../core/+store/router/router.actions';

@Component({
  selector: 'app-adminproduct-form',
  templateUrl: './adminproduct-form.component.html',
  styleUrls: ['./adminproduct-form.component.css']
})
@AutoUnsubscribe()
export class AdminProductFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;
  onSave: boolean;
  private sub: Subscription;

  constructor(
    private dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.sub = this.store
      .pipe(select(getSelectedProductByUrl))
      .subscribe(product => {
        if (product.id != null) {
          this.product = product;
        } else if (product.id === null && this.product === undefined) {
          this.product = product;
        } else {
          this.product;
        }
      });

    this.originalProduct = { ...this.product };
  }

  onSaveProduct() {
    this.onSave = true;
    const product = { ...this.product };
    if (product.id) {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    }

    this.originalProduct = { ...this.product };
  }

  onGoBack(): void {
    this.store.dispatch(new RouterActions.Go({
      path: ['admin/products']
    }));
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = Object.keys(this.originalProduct).map(key => {
      if (this.originalProduct[key] === this.product[key]) {
        return true;
      }
      return false;
    });

    console.log('canDeactivate');
    if (flags.every(el => el)) {
      return true;
    }

    if (!this.onSave) {
      return this.dialogService.confirm('Discard changes?');
    } else {
      return true;
    }
  }
}
