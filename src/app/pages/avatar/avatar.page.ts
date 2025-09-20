import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonAvatar, IonImg, IonChip, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonChip, IonImg, IonAvatar, IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, LargeTitleComponent]
})

export class AvatarPage {
  chips = [
    { label: 'Stan Lee', img: '/assets/stan-lee.jpg' },
    { label: 'Iron Man', img: '/assets/iron-man.png' },
    { label: 'Spider-Man', img: '/assets/spiderman.jpg' }
  ];

  people = [
    { name: 'Stan Lee', img: '/assets/stan-lee.jpg' },
    { name: 'Tony Stark', img: '/assets/iron-man.png' },
    { name: 'Peter Parker', img: '/assets/spiderman.jpg' }
  ];
}
