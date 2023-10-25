import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHilight]'
})
export class HilightDirective {

  constructor(private el : ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('gray');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('green');
  }
  private highlight(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }
}
