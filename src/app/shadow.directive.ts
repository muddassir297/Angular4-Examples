// ElementRef helps to manipulate DOM
// Renderer2 is used to apply styling in the DOM 
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private element: ElementRef, private renderer2:Renderer2) { 
    renderer2.setStyle(element.nativeElement,'background-color','yellow');
    renderer2.setStyle(element.nativeElement,'box-shadow','5px 5px 1px');
  }

}
