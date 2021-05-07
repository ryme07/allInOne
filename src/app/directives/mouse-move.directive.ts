import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseMove]'
})
export class MouseMoveDirective {

  @HostListener('document:mousemove', ['$event'])
  getMouseMove(e: any) {
    const mouseX = e.screenX;
    const mouseY = e.screenY;
    const widthScreen = window.innerWidth / 2;
    const heightScreen = window.innerHeight / 2;

    if (mouseX < widthScreen) {
      console.log('left')
    } else {
      console.log('right')
    }

    if (mouseY < heightScreen) {
      console.log('top')
    } else {
      console.log('bottom')
    }
  }

  constructor() { }

}
