import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { accordionComponent } from './accordion/app.accordionComponent';
import { alertComponent } from './alerts/app.alertComponent';
import { buttonComponent } from './buttons/app.buttonComponent';

@NgModule({
  declarations: [
    AppComponent,
    accordionComponent,
    alertComponent,
    buttonComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
