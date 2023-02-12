import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzGestionComponent } from './quizz-gestion.component';

describe('QuizzGestionComponent', () => {
  let component: QuizzGestionComponent;
  let fixture: ComponentFixture<QuizzGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzGestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
