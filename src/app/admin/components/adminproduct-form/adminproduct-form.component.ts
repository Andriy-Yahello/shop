import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
// import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { ProductPromiseService } from '../../../products';
import { ProductModel } from '../../../products/models/product.model';
import { DialogService, AutoUnsubscribe } from '../../../core';
import { Store, select } from '@ngrx/store';
import { AppState, 
  ProductsState, 
  getProductsState, 
  // getSelectedProduct, 
  getSelectedProductByUrl } from './../../../core/+store';
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
  // productsState$: Observable<ProductsState>;
  private sub: Subscription;

  constructor(
    // private productPromiseService: ProductPromiseService,
    // private router: Router,
    // private route: ActivatedRoute,
    private dialogService: DialogService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.product = new ProductModel();
    // this.originalProduct = new ProductModel();

    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: Params) => {
    //       return params.get('productId')
    //         ? this.productPromiseService.getProduct(+params.get('productId'))
    //         : Promise.resolve(null);
    //     })
    //   )
    //   .subscribe(
    //     product => (
    //       this.product = { ...product }),
    //     err => console.log(err)
    //   );


    // this.productsState$ = this.store.pipe(select('products'));
    // this.sub = this.productsState$.subscribe(productsState =>
    //       (this.product = productsState.selectedProduct));

    // this.productsState$ = this.store.pipe(select('products'));

    // this.productsState$ = this.store.pipe(select(getProductsState));
    // this.sub = this.productsState$.subscribe(productsState => {
    //   if (productsState.selectedProduct) {
    //     this.product = productsState.selectedProduct;
    //   } else {
    //     this.product = new ProductModel();
    //   }
    // });

    // this.sub = this.store.pipe(select(getSelectedProduct))
    //  .subscribe(product => {
    //   if (product) {
    //     this.product = product;
    //   } else {
    //     this.product = new ProductModel();
    //   }
    // });

    this.sub = this.store
      .pipe(select(getSelectedProductByUrl))
      .subscribe(product => 
        {
          if (product.id != null)
            this.product = product;
          else if (product.id === null && this.product === undefined){
            this.product = product;
          }
          else { 
            this.product;
          } 
        });

      this.originalProduct = { ...this.product };


    // this.route.paramMap.subscribe(params => {
    // const id = params.get('productId');
    // if (id) {
    //   this.store.dispatch(new ProductsActions.GetProduct(+id));
    // }
    // });
    // this.sub = this.store
    //   .pipe(select(getSelectedProductByUrl))
    //   .subscribe(product => this.product = product);

  }

  onSaveProduct() {
    this.onSave = true;
    const product = { ...this.product };

    // const method = product.id ? 'updateProduct' : 'createProduct';
    // this.productPromiseService[method](product)
    //   .then(() => this.onGoBack())
    //   .catch(err => console.log(err));
    if (product.id) {
      this.store.dispatch(new ProductsActions.UpdateProduct(product));
    } else {
      this.store.dispatch(new ProductsActions.CreateProduct(product));
    }
    

    this.originalProduct = { ...this.product };
  }

  onGoBack(): void {
    // this.router.navigate(['admin/products']);
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

    console.log('canDeactivate')
    if (flags.every(el => el)) {
      return true;
    }

    if (!this.onSave)
      return this.dialogService.confirm('Discard changes?');
    else {
      return true;
    }
  }
}
