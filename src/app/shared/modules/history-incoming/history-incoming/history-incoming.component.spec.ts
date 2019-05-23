import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoryIncomingComponent} from './history-incoming.component';

describe('HistoryIncomingComponent', () => {
  let component: HistoryIncomingComponent;
  let fixture: ComponentFixture<HistoryIncomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryIncomingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIncomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
