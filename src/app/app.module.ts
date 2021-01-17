import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';
import { PagenotfoundComponent } from './util/pagenotfound/pagenotfound.component';
import { HomeComponent } from './util/home/home.component';
import { ArticleDetailComponent } from './article/article-detail/article-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    AuthorComponent,
    PagenotfoundComponent,
    HomeComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
