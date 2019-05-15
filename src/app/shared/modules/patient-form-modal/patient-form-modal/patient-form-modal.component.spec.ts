import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormModalComponent } from './patient-form-modal.component';

describe('PatientFormModalComponent', () => {
  let component: PatientFormModalComponent;
  let fixture: ComponentFixture<PatientFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
