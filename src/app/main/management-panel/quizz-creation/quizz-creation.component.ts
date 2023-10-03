import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Quizz } from '@dto/quizz.model';
import { QuizzService } from 'src/app/shared/services/quizz.service';

@Component({
  selector: 'app-quizz-creation',
  templateUrl: './quizz-creation.component.html',
  styleUrls: ['./quizz-creation.component.scss']
})
export class QuizzCreationComponent {
  creationQuizzForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialogRef: MatDialogRef<QuizzCreationComponent>, private router: Router, private quizzService: QuizzService){
    this.creationQuizzForm = this.formBuilder.group({
      title: ['', Validators.required]
    });
  }

  closeDialog() {
    this.dialogRef.close()
  }

  createQuizz() {
    const quizz: Quizz = {
      title: this.creationQuizzForm.value['title']
    }
    this.quizzService.createQuizz(quizz).subscribe(result => {
      const idQuizz : string = result.body?._id!;
      this.router.navigate(['gestion-quizz', 'edition', idQuizz], { state: { isNewQuizz: true, quizz: result.body } }).then(() => {
        this.dialogRef.close();
      })
    })
  }

}
