import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, ModalController } from '@ionic/angular/standalone';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LargeTitleComponent]
})
export class ModalInfoPage implements OnInit {

  @Input() nombre!: string;
  @Input() pais!: string;

  constructor( private modalController: ModalController) { }

  ngOnInit() {
  }

  exitWithNoArguments() {
    this.modalController.dismiss();
  }

  exitWithArguments() {
    this.modalController.dismiss({
      nombre: 'Erika',
      pais: 'Mexico'
    });
  }
}
