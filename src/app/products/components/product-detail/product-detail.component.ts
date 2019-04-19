import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductArrayService } from '../../services/product-array.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel = new ProductModel;

  constructor(
    private productArrayService: ProductArrayService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.paramMap
      .pipe(
        switchMap((params: Params) => this.productArrayService.getProduct(+params.get('productId'))))
      .subscribe(
        product => 
          this.product = {...product},
        err => console.log(err)
    );
  }

  onGoBack(): void {
    this.router.navigate(['/home']);
  }
}
