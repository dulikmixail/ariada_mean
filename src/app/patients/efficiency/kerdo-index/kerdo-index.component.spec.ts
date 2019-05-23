import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KerdoIndexComponent} from './kerdo-index.component';

describe('KerdoIndexComponent', () => {
  let component: KerdoIndexComponent;
  let fixture: ComponentFixture<KerdoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KerdoIndexComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KerdoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
