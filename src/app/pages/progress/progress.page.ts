import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonProgressBar, IonLabel, IonItem, IonList, IonRange, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRange, IonList, IonItem, IonLabel, IonProgressBar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class ProgressPage implements OnInit {

  percent: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( event:any ) {
    // console.log(event.detail.value);
    // To dynamically change the percentage of the progress bar
    this.percent = event.detail.value / 100;
  }

}
