import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchValue ='';
  constructor(private bookService:BookService) { }


  ngOnInit(): void {
  }
  testsearch()
  {
    console.log("search value :"+ this.searchValue );

    this,this.bookService.getBooks(this.searchValue);
  }
}
