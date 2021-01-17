import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ArticleInterface } from '../interface/article.interface';
import { CollectionInterface } from '../interface/collection.interface';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
});

  constructor(private http: HttpClient) { }

  getArticles(): Observable<CollectionInterface>{
    return this.http.get<CollectionInterface>('http://localhost:8000/articles', {'observe': 'body'});
  }

  getArticle(id: number): Observable<ArticleInterface>{
    return this.http.get<ArticleInterface>('http://localhost:8000/articles/'+id, {'observe': 'body'})
  }
}
