import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonItem, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  standalone: true,
  imports: [IonRefresherContent, IonRefresher, IonItem, IonList, IonLabel, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class RefresherPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event:any) {
    console.log(event);

    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500)
  }

}
