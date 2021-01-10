import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { ArticleJsonInterface } from '../interface/ArticleJsonInterface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  headers: HttpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
});

  constructor(private http: HttpClient) { }

  getArticle(): Observable<HttpResponse<ArticleJsonInterface>>{
    return this.http.get<ArticleJsonInterface>('http://localhost:8000/articles/36', {'observe': 'response'});
  }
}
