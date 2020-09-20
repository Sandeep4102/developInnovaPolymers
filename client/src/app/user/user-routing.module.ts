import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginuserComponent } from "./loginuser/loginuser.component";
import { RegisteruserComponent } from "./registeruser/registeruser.component";
import { HomeComponent } from "./home/home.component";
import { VerifyComponent } from "./verify/verify.component";
import { AdminLoginComponent } from "../admin/admin-login/admin-login.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import {CatalogControlComponent} from "./catalog-control/catalog-control.component";
import {AuthGuard} from '../utility/auth.guard'
const routes: Routes = [
  { path: "login", component: LoginuserComponent },
  { path: "register", component: RegisteruserComponent },
  { path: "verify", component: VerifyComponent },
  {path:"aboutUs",component:AboutUsComponent},
  {path:"termsConditions",component:TermsConditionsComponent},
  {path:"catalog-control",component:CatalogControlComponent, canActivate: [AuthGuard],}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
