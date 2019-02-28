import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAvatarModalComponent } from './patient-avatar-modal.component';

describe('PatientAvatarModalComponent', () => {
  let component: PatientAvatarModalComponent;
  let fixture: ComponentFixture<PatientAvatarModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAvatarModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAvatarModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
