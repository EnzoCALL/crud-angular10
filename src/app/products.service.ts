import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../app/model/Product';
@Injectable({
providedIn: 'root'
})
export class ProductsService {
uri = 'http://localhost:3000/products';
constructor(private http: HttpClient) { }
addProduct(ProductName, ProductDescription, ProductPrice) {
console.log(ProductName, ProductDescription, ProductPrice);
const obj = {
ProductName,
ProductDescription,
ProductPrice
};
this.http.post(`${this.uri}`, obj)
.subscribe(res => console.log('Done'));
}
getProducts():Observable<Product[]> {
return this
.http
.get<Product[]>(`${this.uri}`);
}
editProduct(id): Observable<Product> {
return this
.http
.get<Product>(`${this.uri}/${id}`);
}
updateProduct(ProductName, ProductDescription, ProductPrice, id) : Observable<Product>{
  const obj = {
  id,
  ProductName,
  ProductDescription,
  ProductPrice
  };
  return this
  .http
  .put <Product> (`${this.uri}/${id}`, obj) ;
  }
  deleteProduct(id) : Observable<Product>{
    return this
    .http
    .delete <Product> (`${this.uri}/${id}`);
    }
}
