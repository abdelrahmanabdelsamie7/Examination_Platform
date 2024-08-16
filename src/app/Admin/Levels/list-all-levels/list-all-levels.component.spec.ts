import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllLevelsComponent } from './list-all-levels.component';

describe('ListAllLevelsComponent', () => {
  let component: ListAllLevelsComponent;
  let fixture: ComponentFixture<ListAllLevelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAllLevelsComponent]
    });
    fixture = TestBed.createComponent(ListAllLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
