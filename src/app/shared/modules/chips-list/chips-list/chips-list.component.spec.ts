import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsListComponent } from './chips-list.component';

describe('ChipsListComponent', () => {
  let component: ChipsListComponent;
  let fixture: ComponentFixture<ChipsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
