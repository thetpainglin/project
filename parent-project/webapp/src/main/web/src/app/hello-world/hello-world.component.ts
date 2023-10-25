import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit{

  data = 100;

  dataInc(){
    this.data ++;
  }
  constructor( ) {
    console.log("I am hello work component")
  }

  ngOnInit(): void {
    console.log("HelloWorld ngOnInit");
  }
  ngOnChanges(){
    console.log("HelloWorld ngOnChanges")
  }
  ngDoCheck(): void {
    console.log("HelloWorld ngDoCheck");
  }

}
