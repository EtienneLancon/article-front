import { Component, OnInit } from '@angular/core';

import { ArticleService } from './article.service';

import { Article } from './../classes/Article';
import { ArticleInterface } from '../interface/article.interface';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent implements OnInit {
  articleList: ArticleInterface[] = [];
  article!: ArticleInterface;
  name!: string;

  constructor(private articleS: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();  
  }

  getArticles(): void{
    this.articleS.getArticles().subscribe(response => {
                                          response._embedded.items.forEach((elem: ArticleInterface) =>{
                                            this.articleList.push(elem);
                                          });
                                        });
  }

  getArticle(id: number): void{
    this.articleS.getArticle(id).subscribe(response => {
      this.article = response;
    })
  }

}
