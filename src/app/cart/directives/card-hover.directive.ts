import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary')private ishovering: boolean;
  
    constructor(private el: ElementRef,
                private renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'lightgray');
    }
  
    @HostListener('mouseover') onMouseOver() {
      let part = this.el.nativeElement.querySelector('.card-text');
      this.renderer.setElementStyle(part, 'display', 'block');
      this.ishovering = true;
    }
  
    @HostListener('mouseout') onMouseOut() {
      let part = this.el.nativeElement.querySelector('.card-text');
      this.renderer.setElementStyle(part, 'display', 'none');
      this.ishovering = false;
    }
  }
