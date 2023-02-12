import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzGestionComponent } from './quizz-gestion/quizz-gestion.component';
import { QuizzCardComponent } from './quizz-gestion/quizz-card/quizz-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizzEditionComponent } from './quizz-edition/quizz-edition.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    QuizzGestionComponent,
    QuizzCardComponent,
    QuizzEditionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    QuizzGestionComponent,
    QuizzEditionComponent
  ]
})
export class ManagementPanelModule { }
