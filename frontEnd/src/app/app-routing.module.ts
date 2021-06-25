import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'



const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  },
  {
    path:"crud",
    component: ProductsCrudComponent
  },
  {
    path: "create",
    component: ProductCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
