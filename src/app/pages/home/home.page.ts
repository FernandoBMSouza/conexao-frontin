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
    { tittle: 'Meio Ambiente', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Obras', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Turismo', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Promoção Social', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Defesa Civil', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Limpeza Urbana', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Governo', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Transporte', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Esportes', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Cultura', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Agricultura', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Fazenda', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Administração', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Procuradoria', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Planejamento', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Controle Interno', icon: './assets/images/logo_ver4.jpeg', link: 'home' },
    { tittle: 'Desenvolvimento', icon: './assets/images/logo_ver4.jpeg', link: 'home' }
  ]

  openPage(x: any)
  {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }

}
