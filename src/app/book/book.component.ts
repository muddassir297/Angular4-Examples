import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [BookService]
})
export class BookComponent implements OnInit {
bookDetails: Book[];
//Book Servise is injected via dependency injection
  constructor( private _bkService :BookService) { }

  ngOnInit() {

    //Component has to subscribe to service
    this._bkService.getBooks().subscribe(res=> this.bookDetails = res)
  }

}
