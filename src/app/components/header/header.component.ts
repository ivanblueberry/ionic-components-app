import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton],
})
export class HeaderComponent {
  @Input() title: string = 'Title for default';
}
