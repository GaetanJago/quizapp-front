import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-card',
  templateUrl: './quizz-card.component.html',
  styleUrls: ['./quizz-card.component.scss']
})
export class QuizzCardComponent {
  
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() nbQuestions: number = 0;
  @Input() averageScore?: number;

}
