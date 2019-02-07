import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmcPatientComponent } from './emc-patient.component';

describe('EmcPatientComponent', () => {
  let component: EmcPatientComponent;
  let fixture: ComponentFixture<EmcPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmcPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmcPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
