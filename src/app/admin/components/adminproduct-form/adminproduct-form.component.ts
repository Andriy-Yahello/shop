import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductPromiseService } from '../../../products';
import { ProductModel } from '../../../products/models/product.model';
import { DialogService } from '../../../core';

@Component({
  selector: 'app-adminproduct-form',
  templateUrl: './adminproduct-form.component.html',
  styleUrls: ['./adminproduct-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;

  constructor(
    private productPromiseService: ProductPromiseService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) { }
  
  ngOnInit() {
    this.product = new ProductModel;

    this.route.parent.paramMap
      .pipe(
        switchMap((params: Params) => {
          return params.get('productId')
            ? this.productPromiseService.getProduct(+params.get('productId'))
            : Promise.resolve(null);
        })
      )
      .subscribe(
        product => (this.product = { ...product }),
        err => console.log(err)
      );
  }

  onSaveProduct() {
    const product = { ...this.product };

    const method = product.id ? 'updateProduct' : 'createProduct';
    this.productPromiseService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));

    this.originalProduct = { ...this.product };
  }

  onGoBack(): void {
    this.router.navigate(['admin/products']);
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    const flags = Object.keys(this.originalProduct).map(key => {
      if (this.originalProduct[key] === this.product[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }
    
    return this.dialogService.confirm('Discard changes?');
  }
}
