import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllStudentsComponent } from './list-all-students.component';

describe('ListAllStudentsComponent', () => {
  let component: ListAllStudentsComponent;
  let fixture: ComponentFixture<ListAllStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllStudentsComponent]
    });
    fixture = TestBed.createComponent(ListAllStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
