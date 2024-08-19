import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResultsOfStudentsComponent } from './list-results-of-students.component';

describe('ListResultsOfStudentsComponent', () => {
  let component: ListResultsOfStudentsComponent;
  let fixture: ComponentFixture<ListResultsOfStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListResultsOfStudentsComponent]
    });
    fixture = TestBed.createComponent(ListResultsOfStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
