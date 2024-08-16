import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllDepartmentsComponent } from './list-all-departments.component';

describe('ListAllDepartmentsComponent', () => {
  let component: ListAllDepartmentsComponent;
  let fixture: ComponentFixture<ListAllDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllDepartmentsComponent]
    });
    fixture = TestBed.createComponent(ListAllDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
