import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonGrid, IonCol, IonRow, IonImg, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonCard, IonImg, IonRow, IonCol, IonGrid, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class GridPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
