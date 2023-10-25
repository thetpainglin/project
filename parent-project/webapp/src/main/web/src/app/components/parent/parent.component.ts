import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  data = 110;
  currentName : string = "";
  names :Array<string> = ["One", "Two" , "Three"];

  ngOnInit(){
    this.currentName = this.names[0];
  }
  onClick(){
    this.data ++;
  }
  childNameClick(name:string){
    this.currentName = name;
  }

}
