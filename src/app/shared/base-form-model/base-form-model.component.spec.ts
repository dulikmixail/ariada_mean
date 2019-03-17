import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseFormModelComponent } from './base-form-model.component';

describe('BaseFormModelComponent', () => {
  let component: BaseFormModelComponent;
  let fixture: ComponentFixture<BaseFormModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseFormModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseFormModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
