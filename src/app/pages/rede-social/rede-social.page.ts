import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-rede-social',
  templateUrl: './rede-social.page.html',
  styleUrls: ['./rede-social.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RedeSocialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
