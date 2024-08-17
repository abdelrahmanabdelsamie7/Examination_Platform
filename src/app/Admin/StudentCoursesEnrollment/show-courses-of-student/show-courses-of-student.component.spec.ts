import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoursesOfStudentComponent } from './show-courses-of-student.component';

describe('ShowCoursesOfStudentComponent', () => {
  let component: ShowCoursesOfStudentComponent;
  let fixture: ComponentFixture<ShowCoursesOfStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowCoursesOfStudentComponent]
    });
    fixture = TestBed.createComponent(ShowCoursesOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
