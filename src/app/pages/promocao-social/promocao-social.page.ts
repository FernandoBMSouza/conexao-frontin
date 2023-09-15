import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-promocao-social',
  templateUrl: './promocao-social.page.html',
  styleUrls: ['./promocao-social.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PromocaoSocialPage implements OnInit {

  constructor(public nav: NavController) { }

  public funcionarios = [
    { tittle: 'Pessoa 1', area:'teste', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 2', area:'teste', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 3', area:'teste', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 4', area:'teste', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 5', area:'teste', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 6', area:'teste', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' }
  ]

  public options = [
    { tittle: 'CRAS', link: 'cras' },
    { tittle: 'CREAS', link: 'cras' },
    { tittle: 'Bolsa Família', link: 'cras' },
    { tittle: 'Cesta Básica', link: 'cras' },
    { tittle: 'CAD Único', link: 'cras' }
  ]

  openPage(x: any)
  {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }
}
