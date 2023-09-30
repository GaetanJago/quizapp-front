import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzGestionComponent } from './quizz-gestion/quizz-gestion.component';
import { QuizzCardComponent } from './quizz-gestion/quizz-card/quizz-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizzEditionComponent } from './quizz-edition/quizz-edition.component';
import { QuizzCreationComponent } from './quizz-creation/quizz-creation.component';



@NgModule({
  declarations: [
    QuizzGestionComponent,
    QuizzCardComponent,
    QuizzEditionComponent,
    QuizzCreationComponent
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
