import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg-list',
  templateUrl: './keg-list.component.html',
  styleUrls: ['./keg-list.component.css']
})
export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  kegs: Keg[] = [
    new Keg('Watermelon Mint', 'ABC', 5.00, 4.5, 124 ),
    new Keg('Detox', 'HealthCo.', 6.00, 3.4, 0),
    new Keg('Lemon Strawberry', 'Kombucha Inc.', 4.00, 2.1, 100)
  ];

  getStatus(currentKeg) {
    if (currentKeg.amount === 0 )
    {
      currentKeg.available = false;
      return "No";
    }
    else
    {
      return "Yes";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
