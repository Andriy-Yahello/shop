import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../models/product';
import { Category } from '../../enums/category';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list: Array<ProductModel> = [];

  constructor() { }

  ngOnInit() { }

  onBuy(){
    console.log("You have bought a product!")
  }

  displayList(list){
    this.list = list;
  }
}
