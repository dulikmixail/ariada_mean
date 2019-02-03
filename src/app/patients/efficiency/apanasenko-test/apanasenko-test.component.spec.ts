import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApanasenkoTestComponent } from './apanasenko-test.component';

describe('ApanasenkoTestComponent', () => {
  let component: ApanasenkoTestComponent;
  let fixture: ComponentFixture<ApanasenkoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApanasenkoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApanasenkoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
