import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-keg',
  templateUrl: './new-keg.component.html',
  styleUrls: ['./new-keg.component.css']
})
export class NewKegComponent {
@Output() sendKeg = new EventEmitter();

submitForm(name: string, brand: string, price: number, ABV: number, amount: number) {
  let newKeg: Keg = new Keg(name, brand, price, ABV, amount);
  this.sendKeg.emit(newKeg);
}

isAuth: boolean = false;
  password: string = "1234";
  employeePassword: string;

onSubmit() {
  return this.employeePassword;
}
trueB() {
  return true;
}

CheckPassword() {
  if(this.password===this.employeePassword)
  {
    this.isAuth = true;
  }
}

  constructor() { }

  ngOnInit() {
  }

}
