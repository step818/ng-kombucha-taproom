import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { NewKegComponent } from './new-keg/new-keg.component';
import { SellPintComponent } from './sell-pint/sell-pint.component';

@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    NewKegComponent,
    SellPintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
