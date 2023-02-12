import { Component, OnInit } from '@angular/core';
import { Quizz } from 'src/app/shared/models/quizz.model';
import { QuizzService } from 'src/app/shared/services/quizz.service';

@Component({
  selector: 'app-quizz-gestion',
  templateUrl: './quizz-gestion.component.html',
  styleUrls: ['./quizz-gestion.component.scss']
})
export class QuizzGestionComponent implements OnInit {

  quizzs: Quizz[] = [];

  constructor(private quizzService: QuizzService) {}
  
  ngOnInit(): void {
    this.quizzService.getAllQuizzs().subscribe(res => {
      this.quizzs = res.body ?? [];
    })
  }

  
}
