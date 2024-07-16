import { Routes } from '@angular/router';
import path from 'path';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: () => import('./login/login-routing.module').then((m) => m.LoginRoutingModule),
    },
    {
        path: 'menu', 
        loadChildren: () => import('./menu/menu-routing.module').then((m) => m.MenuRoutingModule),
    },
    {
        path: 'settings', 
        loadChildren: () => import('./settings/settings-routing.module').then((m) => m.SettingsRoutingModule),
    },
    {
        path: 'movie', 
        loadChildren: () => import('./movie/movie-routing.module').then((m) => m.MovieRoutingModule),
    },
    {
        path: 'account', 
        loadChildren: () => import('./account/account-routing.module').then((m) => m.AccountRoutingModule),
    }
];
