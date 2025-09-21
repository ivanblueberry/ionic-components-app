import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton, IonLabel, IonItem, IonList, IonReorderGroup, IonReorder, IonIcon } from '@ionic/angular/standalone';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

// Icons of Ionic
import { addIcons } from 'ionicons';
import { ellipsisHorizontalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [IonIcon, IonReorderGroup, IonList, IonItem, IonLabel, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LargeTitleComponent, IonReorder]
})
export class ListReorderPage implements OnInit {

  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  // Create boolean propertie
  reorderDisabled: boolean = true;

  constructor() {
    addIcons({
      ellipsisHorizontalOutline
    })
  }

  ngOnInit() {
  }

  doReorder( event: any ){
    console.log(event);

    const itemMover = this.personajes.splice( event.detail.from, 1 )[0];
    this.personajes.splice( event.detail.to, 0, itemMover );

    event.detail.complete();

    console.log(this.personajes);

  }

}
