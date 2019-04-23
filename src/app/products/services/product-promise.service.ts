import { Injectable } from '@angular/core';
import { ProductsServicesModule } from '../products-services.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductModel } from '../models/product.model';
import { TimingService } from 'src/app/core/services/timing.service';

@Injectable({
    providedIn: ProductsServicesModule
})
export class ProductPromiseService {
    private productsUrl = 'http://localhost:3000/products';

    constructor(private http: HttpClient, private timingService: TimingService) { }

    getProducts(): Promise<ProductModel[]> {
        const startTime = Date.now();

        const res = this.http
            .get(this.productsUrl)
            .toPromise()
            .then(response => response as ProductModel[])
            .catch(this.handleError);

        console.log(`getProducts took: ${this.timingService.TimingInterceptor(startTime)} s`);

        return res;
    }

    getProduct(id: number): Promise<ProductModel> {
        const startTime = Date.now();
        const url = `${this.productsUrl}/${id}`;

        const res = this.http
            .get(url)
            .toPromise()
            .then(response => response as ProductModel)
            .catch(this.handleError);

        console.log(`getProduct took: ${this.timingService.TimingInterceptor(startTime)} s`);

        return res;
    }

    updateProduct(product: ProductModel): Promise<ProductModel> {
        const startTime = Date.now();
        const url = `${this.productsUrl}/${product.id}`,
        body = JSON.stringify(product),
        options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        const res = this.http
            .put(url, body, options)
            .toPromise()
            .then(response => response as ProductModel)
            .catch(this.handleError);

        console.log(`updateProduct took: ${this.timingService.TimingInterceptor(startTime)} s`);

        return res;
    }

    createProduct(product: ProductModel): Promise<ProductModel> {
        const startTime = Date.now();
        console.log(JSON.stringify(product));
        const url = this.productsUrl,
        body = JSON.stringify(product),
        options = {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        const res = this.http
            .post(url, body, options)
            .toPromise()
            .then(response => response as ProductModel)
            .catch(this.handleError);

        console.log(`createProduct took: ${this.timingService.TimingInterceptor(startTime)} s`);

        return res;
    }

    deleteProduct(product: ProductModel): Promise<ProductModel> {
        const startTime = Date.now();
        const url = `${this.productsUrl}/${product.id}`;

        const res = (
            this.http
            .delete(url)
            .toPromise()
            .catch(this.handleError)
        );

        console.log(`deleteProduct took: ${this.timingService.TimingInterceptor(startTime)} s`);

        return res;
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
    }
}
