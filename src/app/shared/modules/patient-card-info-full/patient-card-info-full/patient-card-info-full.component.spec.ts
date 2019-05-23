import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientCardInfoFullComponent} from './patient-card-info-full.component';

describe('PatientCardInfoFullComponent', () => {
  let component: PatientCardInfoFullComponent;
  let fixture: ComponentFixture<PatientCardInfoFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientCardInfoFullComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCardInfoFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
