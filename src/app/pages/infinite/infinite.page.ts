import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonLabel, IonItem, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { LargeTitleComponent } from "src/app/components/large-title/large-title.component";

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonItem, IonLabel, IonContent, CommonModule, FormsModule, HeaderComponent, LargeTitleComponent]
})
export class InfinitePage implements OnInit {

  data: any[] = Array(20)

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;

  constructor() { }

  loadData(  ) {

    setTimeout(() => {

      if ( this.data.length > 50 ) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
        return
      }

      const nuevoArr = Array(20);
      this.data.push( ...nuevoArr );

      // event.target.complete();
      this.infiniteScroll.complete();
    }, 1500);
  }

  ngOnInit() {
  }

}
