import { Component } from '@angular/core';
import { accordionComponent } from './accordion/app.accordionComponent';
import { alertComponent } from './alerts/app.alertComponent';
import { buttonComponent } from './buttons/app.buttonComponent';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
}
