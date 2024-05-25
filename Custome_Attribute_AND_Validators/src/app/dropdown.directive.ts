import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private ele:ElementRef) {
    console.log("Call Drop-Down Menu...");
    
   }
   @HostBinding("class.active") AddClass=false
   @HostBinding("title") title:any
   @HostListener('click') onclick(){
    this.AddClass=!this.AddClass
    this.title="i am jeel narola"
   }

}
