import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuizzService } from 'src/app/shared/services/quizz.service';

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

  @Output() quizzDeleted = new EventEmitter<string>();

  constructor(private quizzService: QuizzService) {}

  deleteQuizz() {
    this.quizzService.deleteQuizz(this.id).subscribe(() => {
      this.quizzDeleted.emit(this.id);
    });
  }

}
