import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Notícias', url: '/noticias', icon: 'newspaper' },
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Social', url: '/rede-social', icon: 'people' },
    { title: 'Alertas', url: '/alertas', icon: 'notifications' },
    { title: 'Ajuda', url: '/ajuda', icon: 'chatbubbles' }
  ];
  public appTabs = [
    { tab: 'noticias', title: 'Notícias', url: './pages/noticias/noticias.page', icon: 'newspaper' },
    { tab: 'home', title: 'Home', url: './pages/home/home.page', icon: 'home' },
    { tab: 'rede-social', title: 'Social', url: './pages/rede-social/rede-social.page', icon: 'people' },
    { tab: 'alertas', title: 'Alertas', url: './pages/alertas/alertas.page', icon: 'notifications' },
    { tab: 'ajuda', title: 'Ajuda', url: './pages/ajuda/ajuda.page', icon: 'chatbubbles' }
  ]
  constructor() {}
}
