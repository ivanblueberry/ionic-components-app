import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel, IonItem, IonList } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { Data, User } from 'src/app/services/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    HeaderComponent,
    LargeTitleComponent,
  ]
})
export class ListPage implements OnInit {
  usuarios!: Observable<any>;

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios(); // Asignar el observable
    // Opcional: también puedes hacer log
    this.usuarios.subscribe(console.log);
  }
}
