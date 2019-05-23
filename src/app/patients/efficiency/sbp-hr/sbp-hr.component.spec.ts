import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SbpHrComponent} from './sbp-hr.component';

describe('SbpHrComponent', () => {
  let component: SbpHrComponent;
  let fixture: ComponentFixture<SbpHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SbpHrComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SbpHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
