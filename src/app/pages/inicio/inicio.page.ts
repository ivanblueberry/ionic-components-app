import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent,
          IonHeader,
          IonTitle,
          IonToolbar,
          IonButton,
          IonRouterLink,
         } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButton,
            IonContent,
            IonHeader,
            IonTitle,
            IonToolbar,
            CommonModule,
            FormsModule,
            IonRouterLink,
            RouterModule]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
