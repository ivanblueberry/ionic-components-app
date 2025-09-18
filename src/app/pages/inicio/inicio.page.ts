import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Standalones
import { IonContent,
          IonHeader,
          IonTitle,
          IonToolbar,
          IonList,
          IonItem,
          IonIcon } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'

// Icons of Ionic
import { addIcons } from 'ionicons';
import { americanFootballOutline,
         logoAppleAppstore} from 'ionicons/icons';


interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule, IonList, IonItem]
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alert',
      redirectTo: '/alert'
    }
  ]

  constructor() {
    addIcons({americanFootballOutline,
              logoAppleAppstore
    });
   }

  ngOnInit() {
  }

}
