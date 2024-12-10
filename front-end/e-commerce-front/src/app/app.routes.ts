import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth-form',
    loadComponent: () => import('./auth-form/auth-form.page').then( m => m.AuthFormPage)
  },
  {
    path: '',
    redirectTo: 'auth-form',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  
];
