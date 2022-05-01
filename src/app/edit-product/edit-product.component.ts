import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ToastrService } from 'ngx-toastr';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  _id: string | undefined | null;
  product!: Product;
  error: boolean = false;

  constructor(
    private web: DatabaseService,
    private rota: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  getProduct(_id: any): void {
    this.web.getProduct(_id).subscribe((res) => {
      if (res) this.product = res as Product;
    });
  }

  edit() {
    this.web.editProduct(this._id, this.product).subscribe((res) => {
      console.log(res);
      if (res.ok == true) {
        this.toastr.success('Edição realizada com sucesso!');
      } else {
        this.toastr.error('Não foi possível realizar a edição.');
      }
    });
  }

  ngOnInit(): void {
    this._id = this.rota.snapshot.paramMap.get('i');
    this.getProduct(this._id);

    setTimeout(() => {  this.error = true }, 3000);
  }
}
