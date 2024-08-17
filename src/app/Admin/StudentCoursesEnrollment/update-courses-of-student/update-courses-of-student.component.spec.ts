import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoursesOfStudentComponent } from './update-courses-of-student.component';

describe('UpdateCoursesOfStudentComponent', () => {
  let component: UpdateCoursesOfStudentComponent;
  let fixture: ComponentFixture<UpdateCoursesOfStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCoursesOfStudentComponent]
    });
    fixture = TestBed.createComponent(UpdateCoursesOfStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
