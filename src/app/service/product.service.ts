import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/products';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }

  baseUrl: string = "http://localhost:1000/products";

  getProducts() {
    return this.http.get<Product[]>(this.baseUrl);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }

  addProduct(product: Product) {
    return this.http.post(this.baseUrl, product);
  }

  updateProduct(product: Product) {
    sessionStorage.removeItem("EditProductId");
    return this.http.put(this.baseUrl + '/' + product.id, product);
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.baseUrl + '/' + id);
  }

  deleteAllProduct(id: number) {
    return this.http.delete(this.baseUrl + "/" + id);
  }

}
