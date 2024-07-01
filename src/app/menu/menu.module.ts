import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieModule } from '../movie/movie.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuRoutingModule,
    RouterModule,
    HttpClientModule,
    MovieModule
  ]
})
export class MenuModule { }
