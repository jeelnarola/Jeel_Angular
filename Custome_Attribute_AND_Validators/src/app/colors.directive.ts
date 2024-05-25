import { Directive, ElementRef, HostListener, Input, PipeTransform } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {
@Input() color:any;
  constructor(private ele:ElementRef) {
    console.log(this.ele.nativeElement);
    
   }

   @HostListener('mouseenter') onMouseEnter() {
    if (this.ele.nativeElement.className === 'btnDir') {
      this.ele.nativeElement.style.color ="black"
      this.ele.nativeElement.style.transition="all 0.2s"
      this.ele.nativeElement.style.backgroundColor="green"
    }else{
      this.ele.nativeElement.style.backgroundColor = "rgb(228, 222, 222)";
      this.ele.nativeElement.style.transition="all 0.2s"
      this.ele.nativeElement.style.transform='scale(1.1)'
      this.ele.nativeElement.style.cursor='pointer'    
    }   
  }
  @HostListener('mouseleave') onMouseLeave() {
    if (this.ele.nativeElement.className === 'btnDir') {
      this.ele.nativeElement.style.color ="white"
      this.ele.nativeElement.style.backgroundColor="blue"
      this.ele.nativeElement.style.transition="all 0.2s"
    }else{
      this.ele.nativeElement.style.backgroundColor = "white";
      this.ele.nativeElement.style.transform='scale(1)'
    }
  }

}
