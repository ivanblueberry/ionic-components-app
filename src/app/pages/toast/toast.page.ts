import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonToast, IonLabel, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonToast, IonButton, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class ToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
  }

}
