import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExamsComponent } from './student-exams.component';

describe('StudentExamsComponent', () => {
  let component: StudentExamsComponent;
  let fixture: ComponentFixture<StudentExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentExamsComponent]
    });
    fixture = TestBed.createComponent(StudentExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
