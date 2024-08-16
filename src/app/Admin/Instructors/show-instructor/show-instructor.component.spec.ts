import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInstructorComponent } from './show-instructor.component';

describe('ShowInstructorComponent', () => {
  let component: ShowInstructorComponent;
  let fixture: ComponentFixture<ShowInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowInstructorComponent]
    });
    fixture = TestBed.createComponent(ShowInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
