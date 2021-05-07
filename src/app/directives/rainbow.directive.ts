import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
  ];

  initBgColor = 'grey';

  @HostBinding('style.color') color!: string;
  @HostBinding('style.background-color') bgColor!: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.possibleColors[colorPick];

    const colors = this.initBgColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    this.bgColor = colors;
  }

  constructor() { }

}
