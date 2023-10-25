import { Component } from '@angular/core';
import {LoggerService} from "../../logger.service";

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {
  constructor(private loggerService : LoggerService) {
  }
  now = new Date();

  isSpecial = false;
  clickButton(){
    this.loggerService.log("pipe demo");
  }
}
