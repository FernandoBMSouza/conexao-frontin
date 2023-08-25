import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor(public nav: NavController) { }

  public secretarias = [
    { tittle: 'Educação', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Saúde', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Ambiente', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Obras', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Turismo', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Social', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Governo', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Esportes', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Cultura', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Agricul', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Fazenda', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Admin', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Procura', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Planej', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Controle', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Desenvol', icon: './assets/images/logo_ver4.jpeg', link: 'home' }
  ]

  public cards = [
    { tittle: 'Oficinas', img: 'https://ionicframework.com/docs/img/demos/card-media.png', link: 'home' },
    { tittle: 'Cursos', img: 'https://ionicframework.com/docs/img/demos/card-media.png', link: 'home' },
    { tittle: 'Podcast', img: 'https://ionicframework.com/docs/img/demos/card-media.png', link: 'home' },
    { tittle: 'Calendário', img: 'https://ionicframework.com/docs/img/demos/card-media.png', link: 'home' },
    { tittle: 'Contatos', img: 'https://ionicframework.com/docs/img/demos/card-media.png', link: 'home' }
  ]

  openPage(x: any)
  {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }

}
