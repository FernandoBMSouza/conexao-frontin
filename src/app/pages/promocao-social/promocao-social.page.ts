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
    { tittle: 'Pessoa 1', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 2', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 3', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 4', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 5', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' },
    { tittle: 'Pessoa 6', icon: './assets/images/logo_ver4.jpeg', link: 'promocao-social' }
  ]

  openPage(x: any)
  {
    this.nav.navigateForward(x);
  }

  ngOnInit() {
  }

}
