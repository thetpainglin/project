import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input("name") name:string = '';

  @Output() data = new EventEmitter<string>();

  onClickProfile(){
    console.log("click profile name!");
    this.data.emit(this.name);
  }

}
