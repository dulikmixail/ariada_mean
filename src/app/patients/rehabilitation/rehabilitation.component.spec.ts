import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RehabilitationComponent} from './rehabilitation.component';

describe('RehabilitationComponent', () => {
  let component: RehabilitationComponent;
  let fixture: ComponentFixture<RehabilitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RehabilitationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabilitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
