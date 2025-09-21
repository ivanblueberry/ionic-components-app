import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: true,
  imports: [IonButton,
            IonContent,
            CommonModule,
            FormsModule,
            HeaderComponent,
            LargeTitleComponent
          ]
})
export class ModalPage implements OnInit {

  constructor( private modalController: ModalController ) { }

  ngOnInit() {
  }

  async showModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage
    });

    await modal.present();
  }

}
