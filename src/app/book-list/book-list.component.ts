import { BookService } from './../book.service';
import { BookData } from './../models/bookData.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books!: BookData[];
  bookListSubscription!: Subscription;

  constructor(private bookservice: BookService) { }

  ngOnInit(): void {
    this.bookListSubscription = this.bookservice.displayBooks().subscribe((bookData: BookData[]) => {
      this.books = bookData;
      console.log(this.books[0].volumeInfo.imageLinks.thumbnail);
    });

  }

}
