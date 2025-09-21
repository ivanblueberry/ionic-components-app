import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, LoadingController } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
  }

  showLoading( ) {
    this.presentLoading('Cargando');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading( message: string) {
    this.loading = await this.loadingCtrl.create({
      message,
    });

    await this.loading.present();
  }
}
