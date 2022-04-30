import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {
   }

}
