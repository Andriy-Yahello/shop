import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductArrayService } from '../../services/product-array.service';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';
import { FeedbackListService, DialogService } from '../../../core';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;

  constructor(
    public feedbackListService: FeedbackListService,
    private productArrayService: ProductArrayService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogService: DialogService) { }

  ngOnInit(): void {
      this.product = { ...this.product };
      this.route.data.pipe(pluck('product'))
        .subscribe((product: ProductModel) => {
          this.product = { ...product };
          this.originalProduct = { ...product };
    });
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productArrayService.updateProduct(product);
      this.router.navigate(['']);
    } else {
      this.productArrayService.createProduct(product);
      this.onGoBack();
    }

    this.originalProduct = { ...this.product };
  }

  onGoBack(): void {
    this.router.navigate(['']);
  }

  onShowFeedBack(): void {
    console.log('Entered');
    this.router.navigate([{
      outlets: { feedback: ['feedback'] }
    }]);
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
