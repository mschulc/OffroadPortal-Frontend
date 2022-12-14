/////////////////////////////////////////////////////////////
// Off-Road Portal AngularClient                           //
// Bachelor's thesis software                              //
// Author and software owner Maciej Schulc                 //
// All rights reserved ®                                   //
// File: article.service.ts                                //
/////////////////////////////////////////////////////////////

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService{

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiUrl;
  public articleId: number = 0;

  getArticles(url: string):Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + url)
  }
  getArticleById(url: string, id: string)
  {
    return this.http.get<Article>(this.baseUrl + url+ id)
  }

  getArticlesByAuthorId(url: string, id: string): Observable<Article[]>{
    return this.http.get<Article[]>(this.baseUrl + url + id)
  }

  addArticle(model: any, url: string): Observable<any>{
      return this.http.post<Article>(this.baseUrl + url, model);
  }

  updateArticle(model: any, url: string): Observable<any>{
      return this.http.patch<Article>(this.baseUrl + url, model);
  }

  deleteArticle(url: string){
    this.http.delete(this.baseUrl + url).subscribe(
      Response =>
      {
        console.log(Response);
      }, error => {
        console.log(error);
      }
    );
  }

  public setArticleId(articleId: number){
    this.articleId = articleId;
    console.log(this.articleId)
  }

  public getArticleId(): number{
    return this.articleId;
  }
}
