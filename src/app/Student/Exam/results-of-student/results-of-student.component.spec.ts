import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsOfStudentComponent } from './results-of-student.component';

describe('ResultsOfStudentComponent', () => {
  let component: ResultsOfStudentComponent;
  let fixture: ComponentFixture<ResultsOfStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsOfStudentComponent]
    });
    fixture = TestBed.createComponent(ResultsOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
