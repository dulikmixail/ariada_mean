import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCardInfoComponent } from './patient-card-info.component';

describe('PatientCardInfoComponent', () => {
  let component: PatientCardInfoComponent;
  let fixture: ComponentFixture<PatientCardInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCardInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
