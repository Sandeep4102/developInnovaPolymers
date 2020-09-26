import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RegisteruserComponent } from "./registeruser/registeruser.component";
import { LoginuserComponent } from "./loginuser/loginuser.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserRoutingModule } from "../user/user-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VerifyComponent } from "./verify/verify.component";
import { AuthService } from "../utility/auth.service";
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { CatalogControlComponent } from './catalog-control/catalog-control.component';
import {MatCardModule} from '@angular/material/card';
import { NgxSpinnerModule } from "ngx-spinner";  

@NgModule({
  declarations: [
    RegisteruserComponent,
    LoginuserComponent,
    HomeComponent,
    VerifyComponent,
    AboutUsComponent,
    TermsConditionsComponent,
    CatalogControlComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    UserRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    NgxSpinnerModule
  ],
  exports : [NgxSpinnerModule],
  providers: [AuthService]
})
export class UserModule {}
