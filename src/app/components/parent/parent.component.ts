import { Component, OnInit } from '@angular/core';
import { Book } from '@app/models/book';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  bookList: Book[] = [
    { title: 'premier livre' },
    { title: 'deuxième livre' },
    { title: 'troisième livre' },
    { title: 'quatrième livre' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
