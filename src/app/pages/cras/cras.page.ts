import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cras',
  templateUrl: './cras.page.html',
  styleUrls: ['./cras.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CrasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
