import { Component } from '@angular/core';
import { randomizeBgColors } from 'background-color-randomizer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    randomizeBgColors();
  }
}
