import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { map, take, catchError } from 'rxjs/operators';
import { ProductArrayService } from '../services/product-array.service';
import { ProductsServicesModule } from '../products-services.module';
import { Category } from '../enums/categoty.enum';

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

    return this.productArrayService.getProduct(id).pipe(
      map((product: ProductModel) => {
        if (product) {
          return product;
        } else {
          this.router.navigate(['/home']);
          return null;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/home']);
        return of(null);
      })
    );
  }
}
