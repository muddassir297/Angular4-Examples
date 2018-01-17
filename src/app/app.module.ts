import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { RatingComponent } from './rating/rating.component';
import { ProductService } from './product.service';
import { PowerPipe } from './power.pipe';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { ShadowDirective } from './shadow.directive';

import { BookComponent } from './book/book.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    RatingComponent,
    PowerPipe,
    RatingChildComponent,
    ShadowDirective,
    BookComponent,
    PostComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
