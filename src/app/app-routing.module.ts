import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './main/dashboard/pages/dashboard/dashboard.component';
import { QuizzEditionComponent } from './main/management-panel/quizz-edition/quizz-edition.component';
import { QuizzGestionComponent } from './main/management-panel/quizz-gestion/quizz-gestion.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'gestion-quizz',
    component: QuizzGestionComponent
  },
  {
    path: 'gestion-quizz/edition/:id',
    component: QuizzEditionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
