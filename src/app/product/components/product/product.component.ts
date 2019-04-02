import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: Array<ProductModel> = [];
  sum: number = 0;

  constructor() { }

  ngOnInit() { }

  onBuy(){
    console.log("You have bought a product!")
  }

  displayList(list){
    this.list = list;
  }

  getSum(productList: Array<ProductModel>){
    productList.forEach(element => {
      this.sum += element.price
    });
  }
}