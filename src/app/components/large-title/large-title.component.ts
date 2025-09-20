import { Component, Input } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-large-title',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle],
  templateUrl: './large-title.component.html',
})
export class LargeTitleComponent {
  /** Texto del título que se mostrará en grande */
  @Input() title: string = 'Título';
}
