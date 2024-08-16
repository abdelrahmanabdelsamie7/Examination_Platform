import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLevelComponent } from './show-level.component';

describe('ShowLevelComponent', () => {
  let component: ShowLevelComponent;
  let fixture: ComponentFixture<ShowLevelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowLevelComponent]
    });
    fixture = TestBed.createComponent(ShowLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
