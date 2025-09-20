import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonListHeader, IonButton, IonInput, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonItem, IonInput, IonButton, IonListHeader, IonLabel, IonList, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class InputPage implements OnInit {

  nombre: string = 'Ivan Torres';
  usuario = {
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit( formulario: NgForm ) {
    console.log(formulario);
  }

}
