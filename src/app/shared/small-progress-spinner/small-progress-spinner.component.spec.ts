import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallProgressSpinnerComponent } from './small-progress-spinner.component';

describe('SmallProgressSpinnerComponent', () => {
  let component: SmallProgressSpinnerComponent;
  let fixture: ComponentFixture<SmallProgressSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallProgressSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
