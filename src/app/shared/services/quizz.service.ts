import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Quizz } from '../models/quizz.model';
import { Observable } from 'rxjs';
import { QuizzPopulated } from '../models/quizz-populated';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private http: HttpClient) { }

  getAllQuizzs() : Observable<HttpResponse<Quizz[]>> {
    return this.http.get<Quizz[]>('quizz', { observe: 'response' });
  }

  getQuizz(id: string) : Observable<HttpResponse<QuizzPopulated>> {
    return this.http.get<QuizzPopulated>(`quizz/${id}`, { observe: 'response' });
  }
}
