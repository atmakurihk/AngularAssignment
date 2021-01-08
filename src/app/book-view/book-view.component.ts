import { BookService } from './../book.service';
import { BookData } from './../models/bookData.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss']
})
export class BookViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bookService: BookService) { }

  book!: BookData;
  id!: number;
  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) =>
      {
        this.id = +params.id;
      }
    );
    this.book = this.bookService.getbookById(this.id);
  console.log("reciper ",this.bookService.getbookById(this.id));
  }

}
