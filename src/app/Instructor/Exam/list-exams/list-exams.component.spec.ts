import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExamsComponent } from './list-exams.component';

describe('ListExamsComponent', () => {
  let component: ListExamsComponent;
  let fixture: ComponentFixture<ListExamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListExamsComponent]
    });
    fixture = TestBed.createComponent(ListExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
