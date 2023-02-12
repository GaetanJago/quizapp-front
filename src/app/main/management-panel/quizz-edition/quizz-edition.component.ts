import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizzPopulated } from 'src/app/shared/models/quizz-populated';
import { Quizz } from 'src/app/shared/models/quizz.model';
import { QuizzService } from 'src/app/shared/services/quizz.service';

@Component({
  selector: 'app-quizz-edition',
  templateUrl: './quizz-edition.component.html',
  styleUrls: ['./quizz-edition.component.scss']
})
export class QuizzEditionComponent implements OnInit {

  quizz?: QuizzPopulated;
  numQuestion: number = 0;
  editionTitle: boolean = false;
  editionQuestion: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizzService: QuizzService) {}
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.quizzService.getQuizz(params['id']).subscribe(result => {
          this.quizz = result.body ?? undefined;
        })
      }
    )
    
  }



}
