import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelfExercisesComponent} from './self-exercises.component';

describe('SelfExercisesComponent', () => {
  let component: SelfExercisesComponent;
  let fixture: ComponentFixture<SelfExercisesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelfExercisesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
