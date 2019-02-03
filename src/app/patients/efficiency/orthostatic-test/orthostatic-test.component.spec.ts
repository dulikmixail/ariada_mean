import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrthostaticTestComponent } from './orthostatic-test.component';

describe('OrthostaticTestComponent', () => {
  let component: OrthostaticTestComponent;
  let fixture: ComponentFixture<OrthostaticTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrthostaticTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrthostaticTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
