import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from 'src/app/products/models/product.model';
import { Router } from '@angular/router';
import { ProductArrayService } from 'src/app/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Observable<Array<ProductModel>>;

  constructor(
    private router: Router,
    private productArrayService: ProductArrayService
  ) { }

  ngOnInit() {
    this.products = this.productArrayService.getProducts();
  }

}
