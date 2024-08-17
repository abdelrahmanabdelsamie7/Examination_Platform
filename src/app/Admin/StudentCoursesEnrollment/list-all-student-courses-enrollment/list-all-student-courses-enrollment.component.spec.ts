import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllStudentCoursesEnrollmentComponent } from './list-all-student-courses-enrollment.component';

describe('ListAllStudentCoursesEnrollmentComponent', () => {
  let component: ListAllStudentCoursesEnrollmentComponent;
  let fixture: ComponentFixture<ListAllStudentCoursesEnrollmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllStudentCoursesEnrollmentComponent]
    });
    fixture = TestBed.createComponent(ListAllStudentCoursesEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
