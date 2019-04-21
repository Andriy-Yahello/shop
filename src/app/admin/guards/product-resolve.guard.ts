import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { map, take, catchError } from 'rxjs/operators';
import { ProductsServicesModule } from '../../products/products-services.module';
import { ProductModel } from '../../products/models/product.model';
import { ProductArrayService } from '../../products';
import { Category } from '../../products/enums/categoty.enum';


@Injectable({
  providedIn: ProductsServicesModule
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productArrayService: ProductArrayService,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel | null> {
    console.log('ProductResolve Guard is called');

    if (!route.paramMap.has('productId')) {
      return of(new ProductModel(0, '', '', 0, Category.BestSeller, false, 0, new Date(), []));
    }

    const id = +route.paramMap.get('productId');
    console.log('ProductResolveGuard'+id)

    return this.productArrayService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
