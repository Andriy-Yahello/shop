import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[changeFontSize]'
})
export class ChangeDirective {
  @Input('changeFontSize') size: string;

  constructor(private el: ElementRef, private render: Renderer2) {}

  @HostListener('click')
  onClick() {
    console.log("clicked");
    this.changeSize(this.size || '15');
  }

  private changeSize(size: string) {
    console.log("change size");
    this.render.setStyle(this.el.nativeElement, 'fontSize', `${size}px`);
  }
}
