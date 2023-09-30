import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Quizz } from '@dto/quizz.model';
import { QuizzService } from 'src/app/shared/services/quizz.service';
import { QuizzCreationComponent } from '../quizz-creation/quizz-creation.component';

@Component({
  selector: 'app-quizz-gestion',
  templateUrl: './quizz-gestion.component.html',
  styleUrls: ['./quizz-gestion.component.scss']
})
export class QuizzGestionComponent implements OnInit {

  quizzs: Quizz[] = [];

  constructor(private dialog: MatDialog, private quizzService: QuizzService) {}
  
  ngOnInit(): void {
    this.quizzService.getAllQuizzs().subscribe(res => {
      this.quizzs = res.body ?? [];
    })
  }

  openDialogCreationQuizz() {
    this.dialog.open(QuizzCreationComponent, {
      height: '400px',
      width: '600px',
    });
  }

  removeQuizz(id: string) {
    this.quizzs.splice(this.quizzs.findIndex(quizz => quizz._id === id), 1);
  }
  
}
