import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllInstructorsComponent } from './list-all-instructors.component';

describe('ListAllInstructorsComponent', () => {
  let component: ListAllInstructorsComponent;
  let fixture: ComponentFixture<ListAllInstructorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllInstructorsComponent]
    });
    fixture = TestBed.createComponent(ListAllInstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
