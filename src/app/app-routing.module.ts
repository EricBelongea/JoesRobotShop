import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, title: "Home - Joe's Robot Shop"},
  {path: 'catalog/:filter', component: CatalogComponent, title: "Catalog - Joe's Robot Shop"},
  {path: 'cart', component: CartComponent, title: "Cart - Joe's Robot Shop"},
  {path: 'sign-in', component: SignInComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'} // Order Matters here. The empty route cannot be first!
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
