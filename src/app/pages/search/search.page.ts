import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, IonLabel, IonList, IonItem } from '@ionic/angular/standalone';
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";
import { Data } from 'src/app/services/data';
import { Album } from 'src/app/interfaces/interfaces';
import { FiltroPipe } from "../../pipes/filtro-pipe";
import { HeaderComponent } from "src/app/components/header/header.component";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonItem, IonList, IonLabel, IonSearchbar, IonContent, CommonModule, FormsModule, LargeTitleComponent, FiltroPipe, HeaderComponent]
})
export class SearchPage implements OnInit {

  albums: Album[] = [];
  textToSearch: string = '';

  constructor( private dataService: Data ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe( albums => {
      this.albums = albums;
    });
  }

  onSearchChange( event: any ) {
    this.textToSearch = event.detail.value;
  }

}
