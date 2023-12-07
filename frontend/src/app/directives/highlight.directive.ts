import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() favColor: string;

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('display-3');
  }
  @HostBinding('style.background-color') bgColor: string;
  @HostBinding('style.color') color: string;

  // @HostBinding('class') myClass: any;

  // ngAfterViewInit(): void {
  //   console.log(this.myClass);
  // }
  // constructor() {

  // }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
    this.color = '#fff';
    // this.elRef.nativeElement.classList.add("")
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
    this.color = '#222';
  }
}
