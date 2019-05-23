import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HistoryIncomingFormComponent} from './history-incoming-form.component';

describe('HistoryIncomingFormComponent', () => {
  let component: HistoryIncomingFormComponent;
  let fixture: ComponentFixture<HistoryIncomingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryIncomingFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryIncomingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
