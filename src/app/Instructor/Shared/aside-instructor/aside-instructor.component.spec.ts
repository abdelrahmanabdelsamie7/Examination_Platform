import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideInstructorComponent } from './aside-instructor.component';

describe('AsideInstructorComponent', () => {
  let component: AsideInstructorComponent;
  let fixture: ComponentFixture<AsideInstructorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideInstructorComponent]
    });
    fixture = TestBed.createComponent(AsideInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
