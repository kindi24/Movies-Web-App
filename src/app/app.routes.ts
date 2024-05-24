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
    }
];
