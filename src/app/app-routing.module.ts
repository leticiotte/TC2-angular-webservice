import { NgModule } from '@angular/core';
import { ListAllProductsComponent } from './list-all-products/list-all-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
{ path: "list", component: ListAllProductsComponent },
{ path: "add", component: AddProductComponent },
{ path: "edit", component: EditProductComponent },
{ path: "detail", component: DetailProductComponent },
{ path: "delete", component: DeleteProductComponent },
{path: "", redirectTo: "/list", pathMatch: "full"}


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
