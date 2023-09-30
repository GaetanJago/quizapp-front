import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Quizz } from '@dto/quizz.model';
import { Observable } from 'rxjs';
import { QuizzPopulated } from '@dto/quizz-populated';
import { Question } from '@dto/question.model';

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

  createQuizz(quizz: Quizz): Observable<HttpResponse<Quizz>> {
    return this.http.post<Quizz>(`quizz`, quizz, { observe: 'response' });
  }

  deleteQuizz(id: string): Observable<HttpResponse<void>> {
    return this.http.delete<void>(`quizz/${id}`, { observe: 'response' });
  }

  updateQuestion(question: Question): Observable<HttpResponse<any>> {
    return this.http.put<any>(`question/${question._id}`, question, { observe: 'response' });
  }

  addNewQuestionToQuizz(idQuizz: string, question: Question): Observable<HttpResponse<{idQuestion: string}>> {
    return this.http.post<any>(`quizz/${idQuizz}/new-question`, question, { observe: 'response' });
  }

  removeQuestionFromQuizz(idQuizz: string, idQuestion: string): Observable<HttpResponse<any>> {
    return this.http.put<any>(`quizz/${idQuizz}/remove-question/${idQuestion}`, { observe: 'response' })
  }
}
