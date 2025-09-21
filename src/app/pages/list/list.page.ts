import { Component, OnInit, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel, IonItem, IonList, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { Data, User } from 'src/app/services/data';
import { Observable } from 'rxjs';

// Icons of Ionic
import { addIcons } from 'ionicons';
import { shareOutline, heartOutline, trashOutline, list } from 'ionicons/icons';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [IonIcon, IonItemOption, IonItemOptions,
    CommonModule,
    FormsModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    HeaderComponent,
    LargeTitleComponent,
    IonItemSliding
]
})
export class ListPage implements OnInit {
  usuarios!: Observable<any>;

  ionList = viewChild<IonList>(IonList);

  constructor(private dataService: Data) {
    addIcons({heartOutline,shareOutline,trashOutline});
  }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios(); // Asignar el observable
    this.usuarios.subscribe(console.log);
  }

  favorite( user: any ){
    console.log('favorite', user);
    this.ionList()?.closeSlidingItems();
  }

  share( user: any ) {
    console.log('share', user);
    this.ionList()?.closeSlidingItems();
  }

  trash( user: any ) {
    console.log('trash', user);
    this.ionList()?.closeSlidingItems();
  }
}
