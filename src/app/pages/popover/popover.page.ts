import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCol, IonListHeader, IonButton, IonButtons, IonBackButton, PopoverController, IonIcon, IonFooter } from '@ionic/angular/standalone';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  imports: [IonFooter, IonIcon, IonBackButton, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LargeTitleComponent]
})
export class PopoverPage implements OnInit {

  constructor( private popoverController: PopoverController) { }

  ngOnInit() {
  }

  onClick() {

  }

  async presentPopover( ev: any ){
    const popover = await this.popoverController.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    })

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log(data)
  }

}
