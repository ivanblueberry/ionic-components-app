import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonLabel, IonItem, IonList, IonMenu, IonHeader, IonToolbar, IonTitle, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonToolbar, IonList, IonItem, IonContent, IonApp, IonRouterOutlet, IonMenu, IonHeader, IonMenu, IonTitle, IonMenu]
})
export class AppComponent {
  constructor() {}
}
