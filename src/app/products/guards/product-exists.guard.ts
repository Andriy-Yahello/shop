import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

// ngrx
import { Store, select } from '@ngrx/store';
import { AppState, getProductsData } from './../../core/+store';
import * as RouterActions from './../../core/+store/router/router.actions';

// rxjs
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';

import { ProductsServicesModule } from '../products-services.module';
import { checkStore } from './check-store.function';

@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductExistGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return checkStore(this.store).pipe(
      switchMap(() => {
        console.log('canActivate ProductExistGuard');
        const id = +route.paramMap.get('productId');
        return this.hasProduct(id);
      })
    );
  }

  private hasProduct(id: number): Observable<boolean> {
    return this.store.pipe(
      select(getProductsData),
      map(products => !!products.find(product => product.id === id)),
      tap(result => {
        if (!result) {
          this.store.dispatch(new RouterActions.Go({ path: ['admin/products'] }));
        }
      }),
      take(1)
    );
  }
}
