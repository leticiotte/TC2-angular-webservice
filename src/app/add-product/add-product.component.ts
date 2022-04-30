import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = { title: "", price: 0.0, description: "" }

  constructor(private web : DatabaseService, private toastr: ToastrService) { }

  add(){
    this.web.addProduct(this.product).subscribe(res => {
      console.log(res)
      if(res.ok == true){
        this.toastr.success("Cadastro realizado com sucesso!")
      }else{
        this.toastr.error("Não foi possível realizar o cadastro.")
      }
    });
  }

  ngOnInit(): void {
  }

}
