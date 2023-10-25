import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-question-box',
  templateUrl: './question-box.component.html',
  styleUrls: ['./question-box.component.css']
})
export class QuestionBoxComponent {
  @Output() addItem = new EventEmitter<string>();
  @Output() updateItem = new EventEmitter<string>();
  @Input() value : string = '';
  updateDisable = false;

  haveBorder = true;
  msg : string  = "";
  childItem : any ="";

  btnAddClick(item:string){

    console.log("btn add click ",item);
    this.addItem.emit(item);
  }
  updateItemClick(newItem:string){
    this.updateItem.emit(newItem);
  }
  myClick(){
    return "hello";
  }
  onKeydown(value:any){
    console.log(value);
  }
}
