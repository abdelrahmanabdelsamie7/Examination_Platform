import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChoiceComponent } from './update-choice.component';

describe('UpdateChoiceComponent', () => {
  let component: UpdateChoiceComponent;
  let fixture: ComponentFixture<UpdateChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateChoiceComponent]
    });
    fixture = TestBed.createComponent(UpdateChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
