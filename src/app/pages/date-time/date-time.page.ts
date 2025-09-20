import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, IonList, IonButton, IonListHeader, IonItem, IonDatetime, IonPopover, IonText } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonItem, IonListHeader, IonList, IonLabel, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  cambioFecha( event: any ) {
    console.log(event);
    console.log(new Date( event.detail.value ));
  }

}
