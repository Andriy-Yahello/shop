import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { ProductPromiseService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Array<ProductModel>>;

  constructor(
    private router: Router,
    private productPromiseService: ProductPromiseService) { }

  ngOnInit() {
    this.products = from(this.productPromiseService.getProducts());
  }

  showFeed(product: ProductModel): void {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
