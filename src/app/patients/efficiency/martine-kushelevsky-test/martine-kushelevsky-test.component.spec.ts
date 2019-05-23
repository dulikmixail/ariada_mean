import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MartineKushelevskyTestComponent} from './martine-kushelevsky-test.component';

describe('MartineKushelevskyTestComponent', () => {
  let component: MartineKushelevskyTestComponent;
  let fixture: ComponentFixture<MartineKushelevskyTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MartineKushelevskyTestComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MartineKushelevskyTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
