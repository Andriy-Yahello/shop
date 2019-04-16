import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductArrayService } from '../../services/product-array.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productArrayService: ProductArrayService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productArrayService.getProduct(+params.get('productId'))))
      .subscribe(
        product => this.product = {...product},
        err => console.log(err)
    );
  }

  onSaveProduct() {
    const product = { ...this.product };

    if (product.id) {
      this.productArrayService.updateProduct(product);
    } else {
      this.productArrayService.createProduct(product);
    }

    this.onGoBack();
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }
}
