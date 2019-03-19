import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCardActionsComponent } from './form-card-actions.component';

describe('FormCardActionsComponent', () => {
  let component: FormCardActionsComponent;
  let fixture: ComponentFixture<FormCardActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCardActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCardActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
