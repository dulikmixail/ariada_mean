import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfficiencyComponent } from './efficiency.component';

describe('EfficiencyComponent', () => {
  let component: EfficiencyComponent;
  let fixture: ComponentFixture<EfficiencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfficiencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
