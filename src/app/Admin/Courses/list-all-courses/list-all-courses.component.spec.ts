import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllCoursesComponent } from './list-all-courses.component';

describe('ListAllCoursesComponent', () => {
  let component: ListAllCoursesComponent;
  let fixture: ComponentFixture<ListAllCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllCoursesComponent]
    });
    fixture = TestBed.createComponent(ListAllCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
