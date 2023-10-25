import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css']
})
export class QuestionItemComponent {

  @Input()  question:string = "";

  ngOnChanges(){
    console.log("Question item change!");
  }

}
