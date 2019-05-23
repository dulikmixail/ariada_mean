import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientCardInfoFullModalComponent} from './patient-card-info-full-modal.component';

describe('PatientCardInfoFullModalComponent', () => {
  let component: PatientCardInfoFullModalComponent;
  let fixture: ComponentFixture<PatientCardInfoFullModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCardInfoFullModalComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardInfoFullModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
