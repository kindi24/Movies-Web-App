import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { MenuRoutingModule } from '../menu/menu-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MenuRoutingModule,
    RouterModule
  ]
})
export class LoginModule { }
