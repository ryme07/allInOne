import { HelloComponent } from './../hello/hello.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compo-outlet',
  templateUrl: './compo-outlet.component.html',
  styleUrls: ['./compo-outlet.component.scss']
})
export class CompoOutletComponent implements OnInit {
  hello = "bonjour"
  constructor() { }

  ngOnInit(): void {
  }

}
