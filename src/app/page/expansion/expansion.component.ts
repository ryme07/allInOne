import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.scss']
})
export class ExpansionComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

  public togglePanel(): void {
    this.panelOpenState = !this.panelOpenState
  }

}
