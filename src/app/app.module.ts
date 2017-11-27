import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { zoneService } from "./Services/zoneservice";
import { ZoneModle  } from "./Services/zonemodel";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [zoneService,ZoneModle],
  bootstrap: [AppComponent]
})
export class AppModule { }
