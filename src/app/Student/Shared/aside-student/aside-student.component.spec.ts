import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideStudentComponent } from './aside-student.component';

describe('AsideStudentComponent', () => {
  let component: AsideStudentComponent;
  let fixture: ComponentFixture<AsideStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideStudentComponent]
    });
    fixture = TestBed.createComponent(AsideStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
