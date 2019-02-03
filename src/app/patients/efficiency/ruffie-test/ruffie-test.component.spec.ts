import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuffieTestComponent } from './ruffie-test.component';

describe('RuffieTestComponent', () => {
  let component: RuffieTestComponent;
  let fixture: ComponentFixture<RuffieTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuffieTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuffieTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
