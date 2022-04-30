import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {

  listProducts: Product[] | undefined

  constructor(private web : DatabaseService) { }

  loadProducts() : void{
    this.web.getProducts().subscribe(res => {
      this.listProducts = res
    });
  }

  ngOnInit(): void {
    this.loadProducts()
  }

}
