import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PhysicalCapacityComponent} from './physical-capacity.component';

describe('PhysicalCapacityComponent', () => {
  let component: PhysicalCapacityComponent;
  let fixture: ComponentFixture<PhysicalCapacityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhysicalCapacityComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalCapacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
