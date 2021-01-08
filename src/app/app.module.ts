import { AppMaterialModule } from './app-material.modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TruncatePipe } from './shared/truncate.pipe';
import { AuthorTransformPipe } from './shared/author-transform.pipe';
import { BookItemComponent } from './book-list/book-item/book-item.component';
import { BookViewComponent } from './book-view/book-view.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookListComponent,
    TruncatePipe,
    AuthorTransformPipe,
    BookItemComponent,
    BookViewComponent,
    StarRatingComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
