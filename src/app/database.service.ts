import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model/Product';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  baseURL = "https://banco-dados-teste.glitch.me/api"

  getProducts() : Observable<Product[]>{
    return this.http.get<Product[]>(this.baseURL + "/produtos")
  }

  addProduct(product: any){
    let body = new HttpParams();
    body = body.set('title', product.title)
    body = body.set('price', String(product.price))
    body = body.set('description', product.description)
    return this.http.post(this.baseURL + "/produtos", body, {observe: "response"})
  }

  getProduct(_id: string): Observable<Product>{
    console.log(`URL: ${this.baseURL + "/produtos/" + _id}`)
    return this.http.get<Product>(this.baseURL + "/produtos/" + _id)
  }

  deleteProduct(_id: string){
    return this.http.delete(this.baseURL + "/produtos/" + _id)
  }

  editProduct(_id: any, product: any){
    let body = new HttpParams();
    body = body.set('title', product.title)
    body = body.set('price', String(product.price))
    body = body.set('description', product.description)
    return this.http.put(this.baseURL + "/produtos/"  + _id, body, {observe: "response"})
  }

  constructor(private http: HttpClient) {
   }

}
