import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegment, IonSegmentButton, IonLabel, IonList, IonItem, IonButton, IonButtons, IonBackButton, IonSkeletonText } from '@ionic/angular/standalone';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { Heroe } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { Data } from 'src/app/services/data';
import { FiltroPipe } from "../../pipes/filtro-pipe";

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonSkeletonText, IonBackButton, IonButtons, IonItem, IonList, IonLabel, IonSegmentButton, IonSegment, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, LargeTitleComponent, FiltroPipe]
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<Heroe[]>;
  publisher: string = 'todos';

  constructor( private dataService: Data ) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event: any ) {
    // console.log(event)
    this.publisher = event.detail.value;
  }

}
