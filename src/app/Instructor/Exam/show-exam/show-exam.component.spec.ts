import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExamComponent } from './show-exam.component';

describe('ShowExamComponent', () => {
  let component: ShowExamComponent;
  let fixture: ComponentFixture<ShowExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowExamComponent]
    });
    fixture = TestBed.createComponent(ShowExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
