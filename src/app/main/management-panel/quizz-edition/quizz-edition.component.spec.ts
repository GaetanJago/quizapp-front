import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizzEditionComponent } from './quizz-edition.component';

describe('QuizzEditionComponent', () => {
  let component: QuizzEditionComponent;
  let fixture: ComponentFixture<QuizzEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizzEditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizzEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
