import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-sell-pint',
  templateUrl: './sell-pint.component.html',
  styleUrls: ['./sell-pint.component.css']
})
export class SellPintComponent  {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter;

finishedEditing(whateve) {
  console.log(whateve);
  this.clickedDone.emit(whateve);
}

  constructor() { }

  ngOnInit() {
  }

}
