import { Component, OnInit } from '@angular/core';

import { ArticleService } from './article.service';

import { Article } from './../classes/Article';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  articleList: Article[] = [];
  //article: Article;

  constructor(private articleS: ArticleService) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    this.articleS.getArticle()
                .subscribe(resp =>{
                  console.log(typeof(resp));
                  //this.article = new Article(resp.id, resp.author.id, resp.title, resp.string, resp.short_description)
                });
  }

}
