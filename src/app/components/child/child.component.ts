import { Component, Input, OnInit } from '@angular/core';
import { Book } from '@app/models/book';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // simple @Input decorator
  // @Input()
  // book!: Book;

  private _book!: Book;

  // setter & getter @Input 
  @Input()
  set book(book: Book) {
    if (book) {
      book.title = this.capitalize(book.title);
    }
    this._book = book;
  }

  get book(): Book {
    return this._book;
  }

  constructor() { }

  ngOnInit(): void {
  }

  capitalizeFirstLetter(word: string) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  //es6 destructuring in Angular
  capitalize(word: string) {
    const [firstLetter, ...restWord] = word;
    return firstLetter.toUpperCase() + restWord.join('').toLowerCase();
  }

}
