import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementFormComponent } from './placement-form.component';

describe('PlacementFormComponent', () => {
  let component: PlacementFormComponent;
  let fixture: ComponentFixture<PlacementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacementFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
