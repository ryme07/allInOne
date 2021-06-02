import { SomethingComponent } from './../something/something.component';
import { CompoOutletComponent } from './../../components/compo-outlet/compo-outlet.component';
import { HelloComponent } from './../../components/hello/hello.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  first = "first"
  Compo = CompoOutletComponent
  CompoTwo = SomethingComponent;

  withArrayInit = [
    { title: this.first, postText: this.Compo },
    { title: "Second title", postText: this.CompoTwo }
  ]

  newArr: any[] = []

  // posts: any[];
  constructor() {


    // this.posts = [];
    // this.posts.push({ title: this.first, postText: this.Compo });
    // this.posts.push({ title: "Second title", postText: this.CompoTwo });
  }

  ngOnInit(): void {
    this.newArr = this.withArrayInit.map(this.adding)
  }


  adding(value: any) {
    return { ...value, isActive: true }
  }

}
