import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { DialogService } from 'src/app/core';
import { ProductArrayService } from 'src/app/products';
import { Router, ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminproduct-form',
  templateUrl: './adminproduct-form.component.html',
  styleUrls: ['./adminproduct-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;

  constructor(
    private productArrayService: ProductArrayService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService
  ) { }

  ngOnInit() {
    this.product = { ...this.product };
      this.route.parent.data.pipe(pluck('product'))
        .subscribe((product: ProductModel) => {
          this.product = { ...product };
          this.originalProduct = { ...product };
    });
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productArrayService.updateProduct(product);
      this.router.navigate(['', { editedProductId: product.id }]);
    } else {
      this.productArrayService.createProduct(product);
      this.onGoBack();
    }

    this.originalProduct = { ...this.product };
  }

  onGoBack(): void {
    this.router.navigate(['']);
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
