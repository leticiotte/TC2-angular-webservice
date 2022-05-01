import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/Product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  _id: string | undefined | null;
  product!: Product;
  priceFormatted: any;
  error: boolean = false;

  constructor(
    private web: DatabaseService,
    private rota: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  getProduct(_id: any): void {
    this.web.getProduct(_id).subscribe((res) => {
      if (res) {
        this.product = res as Product;
        this.priceFormatted = Number(this.product.price).toFixed(2);
      }
    })
  }

  edit() {
    this.web.editProduct(this._id, this.product).subscribe((res) => {
      console.log(res);
      if (res.ok == true) {
        this.toastr.success('Cadastro realizado com sucesso!');
      } else {
        this.toastr.error('Não foi possível realizar o cadastro.');
      }
    });
  }

  ngOnInit(): void {
    this._id = this.rota.snapshot.paramMap.get('i');
    this.getProduct(this._id);
    setTimeout(() => {  this.error = true }, 3000);
  }
}
