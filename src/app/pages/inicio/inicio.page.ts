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
import { alertCircleOutline, americanFootballOutline, beakerOutline, radioButtonOffOutline, cardOutline, checkmarkCircleOutline, calendarOutline, carOutline, gridOutline, infiniteOutline, hammerOutline
      } from 'ionicons/icons';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { HeaderComponent } from "src/app/components/header/header.component";


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
    RouterModule, IonList, IonItem, LargeTitleComponent]
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Checks',
      redirectTo: '/check'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite'
    },
    {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    }
  ];
  constructor() {
    addIcons({americanFootballOutline,
              alertCircleOutline,
              beakerOutline,
              radioButtonOffOutline,
              cardOutline,
              checkmarkCircleOutline,
              calendarOutline,
              carOutline,
              gridOutline,
              infiniteOutline,
              hammerOutline
    });
   }

  ngOnInit() {
  }

}
