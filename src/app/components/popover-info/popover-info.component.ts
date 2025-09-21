import { Component, OnInit } from '@angular/core';
import { IonLabel, IonList, IonItem, PopoverController } from "@ionic/angular/standalone";

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  standalone: true,
  imports: [IonList, IonLabel, IonItem],
})
export class PopoverInfoComponent  implements OnInit {

  items = Array(40);

  constructor( private popoverController: PopoverController ) { }

  ngOnInit() {}

  onClick( value: number ) {
    // console.log(value);
    this.popoverController.dismiss({
      item: value
    });
  }

}
