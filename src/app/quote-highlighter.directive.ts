import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appQuoteHighlighter]'
})
export class QuoteHighlighterDirective {


  constructor(private elem: ElementRef) { }
  private textDeco(action: string) {
    this.elem.nativeElement.style.color = action;
  }

  @HostListener("click") onClicks() {
    this.textDeco("red")
  }

  @HostListener("dblclick") onDoubleClicks() {
    this.textDeco("yellow")
  }





}
