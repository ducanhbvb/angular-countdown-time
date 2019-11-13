import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent {
  default = 10;
  seconds = 10;
  private id: any;
 //  default: number;
  constructor() {
  }
  stars() {
    clearInterval(this.id);
    this.id = setInterval(voi => {
      if (this.seconds > 0) {
        this.seconds--;
      } else {
        clearInterval(this.id);

      }

    }, 1000);
  }

  stop() {
    clearInterval(this.id);
  }

  reset() {
    clearInterval(this.id);
    this.seconds = this.default;
  }
}
