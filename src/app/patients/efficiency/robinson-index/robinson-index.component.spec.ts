import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobinsonIndexComponent } from './robinson-index.component';

describe('RobinsonIndexComponent', () => {
  let component: RobinsonIndexComponent;
  let fixture: ComponentFixture<RobinsonIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobinsonIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobinsonIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
