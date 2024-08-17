import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursesToStudentComponent } from './add-courses-to-student.component';

describe('AddCoursesToStudentComponent', () => {
  let component: AddCoursesToStudentComponent;
  let fixture: ComponentFixture<AddCoursesToStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCoursesToStudentComponent]
    });
    fixture = TestBed.createComponent(AddCoursesToStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
