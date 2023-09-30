import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { QuizzPopulated } from '@dto/quizz-populated';
import { QuizzService } from 'src/app/shared/services/quizz.service';

@Component({
  selector: 'app-quizz-edition',
  templateUrl: './quizz-edition.component.html',
  styleUrls: ['./quizz-edition.component.scss']
})
export class QuizzEditionComponent implements OnInit {

  quizz?: QuizzPopulated;
  numQuestion: number = 0;
  questionForm: FormGroup;
  editionQuestion: boolean = false;
  isAddingQuestion: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private quizzService: QuizzService,
    private formBuilder: FormBuilder) {
      this.questionForm = this.formBuilder.group({
        label: [{value: '', disabled: !this.editionQuestion}, Validators.required],
        goodAnswer: [{value: '', disabled: !this.editionQuestion}, Validators.required],
        badAnswers: this.formBuilder.array([])
      })
    }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.quizzService.getQuizz(params['id']).subscribe(result => {
          this.quizz = result.body ?? undefined;
          this.questionForm.patchValue(this.quizz?.questions[this.numQuestion]!);
          for(const badAnswer of this.quizz?.questions[this.numQuestion].badAnswers ?? [] ){
            this.addBadAnswer(badAnswer);
          }
        })
      }
    )
  }

  public addBadAnswer(value: string = ''): void {
    const badAnswerForm = this.formBuilder.group({
      badAnswer: [{value : value, disabled: !this.editionQuestion}, Validators.required]
    });
    this.badAnswers.push(badAnswerForm);
  }

  public changeEditQuestionMode(editMode: boolean) : void {
    this.editionQuestion = editMode;
    this.editionQuestion ? this.questionForm.enable() : this.questionForm.disable();
  }

  changeQuestion(number : number): void {
    this.numQuestion += number;
    if(this.isAddingQuestion && number === -1) {
      this.quizz?.questions.pop();
    }
    this.isAddingQuestion = false;
    this.questionForm = this.formBuilder.group({
      label: [{value: '', disabled: !this.editionQuestion}, Validators.required],
      goodAnswer: [{value: '', disabled: !this.editionQuestion}, Validators.required],
      badAnswers: this.formBuilder.array([])
    })
    this.questionForm.patchValue(this.quizz?.questions[this.numQuestion]!);
    for(const badAnswer of this.quizz?.questions[this.numQuestion].badAnswers ?? []) {
      this.addBadAnswer(badAnswer);
    }
    
  }

  addQuestion() : void {
    this.changeEditQuestionMode(true);
    this.quizz?.questions.push({
      label: '',
      goodAnswer: '',
      badAnswers: ['', '', ''],
    });
    this.isAddingQuestion = true;
    this.numQuestion++;
    this.questionForm = this.formBuilder.group({
      label: [{value: '', disabled: !this.editionQuestion}, Validators.required],
      goodAnswer: [{value: '', disabled: !this.editionQuestion}, Validators.required],
      badAnswers: this.formBuilder.array([])
    });
    this.addBadAnswer();
    this.addBadAnswer();
    this.addBadAnswer();
  }

  public saveQuestion(): void {
    if(this.questionForm.valid){
      this.quizz!.questions[this.numQuestion].label = this.questionForm.value['label'];
      this.quizz!.questions[this.numQuestion].goodAnswer = this.questionForm.value['goodAnswer'];
      this.quizz!.questions[this.numQuestion].badAnswers = [];
      
      for(let badAnswer of this.badAnswers.value) {
        this.quizz!.questions[this.numQuestion].badAnswers.push(badAnswer.badAnswer);
      }
      if(this.isAddingQuestion) {
        this.quizzService.addNewQuestionToQuizz(this.quizz!._id, this.quizz!.questions[this.numQuestion]).subscribe(result => {
          this.quizz!.questions[this.numQuestion]._id = result.body!.idQuestion;
          this.isAddingQuestion = false;
          this.changeEditQuestionMode(false);
        })
      } else {
        this.quizzService.updateQuestion(this.quizz!.questions[this.numQuestion]).subscribe(next => {
          this.changeEditQuestionMode(false);
        })
      }
    }
    
  }

  public removeQuestionFromQuizz(): void {
    if(!this.isAddingQuestion) {
      this.quizzService.removeQuestionFromQuizz(this.quizz!._id, this.quizz!.questions[this.numQuestion]._id!).subscribe(next => {
        this.quizz?.questions.splice(this.numQuestion, 1);
        if(this.numQuestion > 0) {
          this.changeQuestion(-1);
        } else if(this.quizz?.questions.length === 0) {
          this.addQuestion();
          this.numQuestion = 0;
        } else {
          this.changeQuestion(0);
        }
      })
    }
    
  }

  get badAnswers(): FormArray {
    return this.questionForm.get('badAnswers') as FormArray;
  }

}
