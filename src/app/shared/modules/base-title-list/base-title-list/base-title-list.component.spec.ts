import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTitleListComponent } from './base-title-list.component';

describe('BaseTitleListComponent', () => {
  let component: BaseTitleListComponent;
  let fixture: ComponentFixture<BaseTitleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTitleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
