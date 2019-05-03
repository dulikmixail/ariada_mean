import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCardInfoFullCompactModalComponent } from './patient-card-info-full-compact-modal.component';

describe('PatientCardInfoFullCompactModalComponent', () => {
  let component: PatientCardInfoFullCompactModalComponent;
  let fixture: ComponentFixture<PatientCardInfoFullCompactModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCardInfoFullCompactModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardInfoFullCompactModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
