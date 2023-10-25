import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: ['./change-detection-demo.component.css']
})
export class ChangeDetectionDemoComponent {
  currentTime = new Date();
  constructor(private ngZone : NgZone) {

  }

  ngOnChanges(){
    console.log("ngOnChange running...");
  }
  ngDoCheck(){
    console.log("NgDoCheck ");
  }
  onMouseOver(event : any){
    console.log("on mouse over ",event);
    /*
    setInterval(()=>{
      this.currentTime = new Date();
    },1000)

     */
    this.ngZone.runOutsideAngular(()=>{
      setInterval(()=>{
        this.currentTime = new Date();
      },1000)
    })
  }

}
