import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from '../database.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-list-all-products',
  templateUrl: './list-all-products.component.html',
  styleUrls: ['./list-all-products.component.css']
})
export class ListAllProductsComponent implements OnInit {

  listProducts: Product[] | undefined
  product: Product | undefined

  constructor(private web : DatabaseService, private toastr: ToastrService) { }

  loadProducts() : void{
    this.web.getProducts().subscribe(res => {
      this.listProducts = res
    });
  }

  deleteProduct(_id: string, title: string) : void{
    var r=confirm(`Deseja mesmo excluir o produto ${title}?`);
    if (r!=true) return
    this.web.deleteProduct(_id).subscribe();
    this.toastr.success("Produto excluído com sucesso!")
    this.deleteProductFromList(_id)
  }

  deleteProductFromList(_id: string){
    if(this.listProducts != undefined){
      for(let i = 0; i < this.listProducts?.length; i++){
        console.log(this.listProducts[i]._id)
        if(this.listProducts[i]._id == _id){
          this.listProducts.splice(i, 1);
        }
      }
    }
  }

  ngOnInit(): void {
    this.loadProducts()
  }

}
