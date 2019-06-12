import { Component } from '@angular/core';
import { Keg } from './models/keg.model';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Editable greeting
  seasonalGreeting: string = 'Refresh this Summer with our quenching selection';
  //List of kegs;
  kegs: Keg[] = [
    new Keg('Watermelon Mint', 'ABC', 5.00, 4.5, 0 ),
    new Keg('Detox', 'HealthCo.', 6.00, 3.4, 0),
    new Keg('Lemon Strawberry', 'Kombucha Inc.', 4.00, 2.1, 100)
  ];
 
  getStatus(currentTask) {
    if (currentTask.amount === 0 )
    {
      currentTask.available = false;
      return "No";
    }
    else
    {
      return "Yes";
    }
  }

  isAuth: boolean = false;
  password: string = "1234";
  employeePassword: string;

  onSubmit() {
    return this.employeePassword;
  }

  CheckPassword() {
    if(this.password===this.employeePassword)
    {
      this.isAuth = true;
    }
  }



  selectedKeg = null;

}


