import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonApp, IonRouterOutlet, IonContent, IonLabel, IonItem, IonList, IonMenu, IonHeader, IonToolbar, IonTitle, IonCol, IonIcon, MenuController, IonMenuToggle } from '@ionic/angular/standalone';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { Data } from './services/data';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [CommonModule, RouterLink, IonIcon, IonToolbar, IonList, IonItem, IonContent, IonApp, IonRouterOutlet, IonMenu, IonHeader, IonTitle, IonMenuToggle]
})
export class AppComponent implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private menuCtrl: MenuController,
              private dataService: Data) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
}
