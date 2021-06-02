import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  panelOpenState = false;
  @Input() Compo: any;
  @Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
