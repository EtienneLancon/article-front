import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ArticleInterface } from './../interface/ArticleInterface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
});

  constructor(private http: HttpClient) { }

  getArticle(): Observable<HttpResponse<ArticleInterface>>{
    return this.http.get<ArticleInterface>('http://localhost:8000/articles/36', {'observe': 'response'});
  }
}
