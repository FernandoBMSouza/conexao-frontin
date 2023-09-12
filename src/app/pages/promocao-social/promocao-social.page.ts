import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-promocao-social',
  templateUrl: './promocao-social.page.html',
  styleUrls: ['./promocao-social.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PromocaoSocialPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
