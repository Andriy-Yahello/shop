import { Injectable } from "@angular/core";
import { ProductsServicesModule } from "../products-services.module";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ProductModel } from "../models/product.model";

@Injectable({
    providedIn: ProductsServicesModule
})
export class ProductPromiseService{
    private productsUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient) {}

    getProducts(): Promise<ProductModel[]> {
      return this.http
        .get(this.productsUrl)
        .toPromise()
        .then(response => <ProductModel[]>response)
        .catch(this.handleError);
    }
  
    getProduct(id: number): Promise<ProductModel> {
      const url = `${this.productsUrl}/${id}`;
  
      return this.http
        .get(url)
        .toPromise()
        .then(response => <ProductModel>response)
        .catch(this.handleError);
    }
  
    updateProduct(product: ProductModel): Promise<ProductModel> {
      const url = `${this.productsUrl}/${product.id}`,
        body = JSON.stringify(product),
        options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
  
      return this.http
        .put(url, body, options)
        .toPromise()
        .then(response => <ProductModel>response)
        .catch(this.handleError);
    }
  
    createProduct(product: ProductModel): Promise<ProductModel> {
        console.log(JSON.stringify(product));
      const url = this.productsUrl,
        body = JSON.stringify(product),
        options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
  
      return this.http
        .post(url, body, options)
        .toPromise()
        .then(response => <ProductModel>response)
        .catch(this.handleError);
    }
  
    deleteTask(product: ProductModel): Promise<ProductModel> {
      const url = `${this.productsUrl}/${product.id}`;
  
      return (
        this.http
          .delete(url)
          .toPromise()
          .catch(this.handleError)
      );
    }
  
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}