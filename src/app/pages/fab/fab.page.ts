import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonLabel, IonItem, IonList, IonFabButton, IonIcon, IonFab, IonFabList } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

// Icons of Ionic
import { addIcons } from 'ionicons';
import { addOutline, logoIonic, logoAngular, logoFacebook, logoTwitter, logoYoutube, logoVimeo, logoGithub, logoGoogle } from 'ionicons/icons';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonFabList, IonFab, IonIcon, IonFabButton, IonList, IonItem, IonLabel, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class FabPage implements OnInit {

  data = Array(100);

  constructor() {
    addIcons({addOutline,logoFacebook,logoTwitter,logoYoutube,logoVimeo,logoGithub,logoGoogle,logoAngular,logoIonic});
  }

  ngOnInit() {
  }

}
