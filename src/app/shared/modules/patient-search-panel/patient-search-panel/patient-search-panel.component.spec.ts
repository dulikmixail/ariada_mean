import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PatientSearchPanelComponent} from './patient-search-panel.component';

describe('PatientSearchPanelComponent', () => {
  let component: PatientSearchPanelComponent;
  let fixture: ComponentFixture<PatientSearchPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PatientSearchPanelComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
