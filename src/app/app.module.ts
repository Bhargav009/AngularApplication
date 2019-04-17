import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';
import { AuthAdminGuardService } from './services/auth-admin-guard.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'
 
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavBarComponent } from './bs-nav-bar/bs-nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BsNavBarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'login', component: LoginComponent},
      {path:'products', component: ProductsComponent},
      {path:'shopping-cart', component: ShoppingCartComponent},

      {path:'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      {path:'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
      {path:'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService]},

      {path:'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AuthAdminGuardService]},
      {path:'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AuthAdminGuardService]},
      {path:'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AuthAdminGuardService]},
      {path:'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AuthAdminGuardService]},
    ])
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AuthAdminGuardService,
    UserService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
