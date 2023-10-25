import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent {

  questions : Array<string> = [];
  @Input() question : string = "";
  @Input() index : number = 0;

  isAdmin = false;

  addItem(item:string){
    this.questions.push(item);
  }
  updateItem(item:string){
    this.questions[this.index] = item;
  }
  onClickItem(event:any){
    console.log("get data ",event);
    this.question = event.question;
    this.index = event.index;
  }
}
