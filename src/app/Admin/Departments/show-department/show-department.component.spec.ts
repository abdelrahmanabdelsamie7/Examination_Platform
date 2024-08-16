import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDepartmentComponent } from './show-department.component';

describe('ShowDepartmentComponent', () => {
  let component: ShowDepartmentComponent;
  let fixture: ComponentFixture<ShowDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDepartmentComponent]
    });
    fixture = TestBed.createComponent(ShowDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
