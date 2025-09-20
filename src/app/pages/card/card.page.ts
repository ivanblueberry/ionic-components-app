import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard, IonButton, IonItem, IonList, IonLabel, IonThumbnail } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent, IonThumbnail]
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
