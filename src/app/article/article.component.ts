import { Component, OnInit } from '@angular/core';

import { ArticleService } from './article.service';

import { Article } from './../classes/Article';
import { ArticleJsonInterface } from './../interface/ArticleJsonInterface';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  articleList: Article[] = [];
  article: ArticleJsonInterface;

  constructor(private articleS: ArticleService) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
    this.articleS.getArticle().subscribe(resp => {
                                          this.article = { ... resp.body };
                                        });
  }

}
