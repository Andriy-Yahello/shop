import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { Category } from '../../enums/category';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct: ProductModel;
  list: ProductModel[] = [];

  constructor() { }

  ngOnInit() {
    this.products = this.getProducts();
    console.log(this.products);
  }

  getProducts(){
    //this.products.push(new Product("ball", "playing ball", 400, Category.New));
    var products = [
      new ProductModel("ball", "playing ball", 400, Category.New),
      new ProductModel("desk", "computer desk", 500, Category.Popular),
      new ProductModel("console", "playstation playing console", 300, Category.Popular),
      new ProductModel("pen", "regular writing pen", 400, Category.BestSeller)
    ]

    return products;
  }

  onBuy(){
    console.log("You have bought a product!")
  }

  addToCart(product: ProductModel){
    this.selectedProduct = product;
    console.log(this.selectedProduct);
    this.list.push(this.selectedProduct);
    console.log(this.list);
  }
}
