import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Standalones
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonButtons, IonButton, MenuController, IonMenuButton} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router'

import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { Data } from 'src/app/services/data';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonIcon,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterModule,
    IonList,
    IonItem,
    LargeTitleComponent,
    IonMenuButton]
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: Data
  ) {
   }

  ngOnInit( ) {
    this.componentes = this.dataService.getMenuOpts()
  }

  // The hard way
  // showMenu() {
  //   this.menuCtrl.open('first');
  // }

}
