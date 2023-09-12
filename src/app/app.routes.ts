import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'noticias',
    loadComponent: () => import('./pages/noticias/noticias.page').then( m => m.NoticiasPage)
  },
  {
    path: 'rede-social',
    loadComponent: () => import('./pages/rede-social/rede-social.page').then( m => m.RedeSocialPage)
  },
  {
    path: 'alertas',
    loadComponent: () => import('./pages/alertas/alertas.page').then( m => m.AlertasPage)
  },
  {
    path: 'ajuda',
    loadComponent: () => import('./pages/ajuda/ajuda.page').then( m => m.AjudaPage)
  },
  {
    path: 'promocao-social',
    loadComponent: () => import('./pages/promocao-social/promocao-social.page').then( m => m.PromocaoSocialPage)
  }

];
