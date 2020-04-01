import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../common/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

   books: Book[];
  constructor(private bookService:BookService) {

   }

  ngOnInit(): void {
    this.listBooks();
  }

  listBooks(){
    this.bookService.getBooks().subscribe(response=>{
      this.books = response;
      console.log(response);
    })
  }

}
