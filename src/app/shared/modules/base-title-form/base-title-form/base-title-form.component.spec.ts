import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTitleFormComponent } from './base-title-form.component';

describe('BaseTitleFormComponent', () => {
  let component: BaseTitleFormComponent;
  let fixture: ComponentFixture<BaseTitleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTitleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
