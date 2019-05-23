import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientCardInfoFullCompactComponent} from './patient-card-info-full-compact.component';

describe('PatientCardInfoFullCompactComponent', () => {
  let component: PatientCardInfoFullCompactComponent;
  let fixture: ComponentFixture<PatientCardInfoFullCompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCardInfoFullCompactComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardInfoFullCompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
