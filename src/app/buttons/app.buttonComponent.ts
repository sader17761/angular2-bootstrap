import {Component} from '@angular/core';

@Component({
  selector: 'ngbd-buttons',
  templateUrl: './buttons.html'
})
export class buttonComponent {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
