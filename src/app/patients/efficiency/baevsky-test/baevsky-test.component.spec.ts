import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaevskyTestComponent } from './baevsky-test.component';

describe('BaevskyTestComponent', () => {
  let component: BaevskyTestComponent;
  let fixture: ComponentFixture<BaevskyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaevskyTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaevskyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
