import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkibinskayaIndexComponent } from './skibinskaya-index.component';

describe('SkibinskayaIndexComponent', () => {
  let component: SkibinskayaIndexComponent;
  let fixture: ComponentFixture<SkibinskayaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkibinskayaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkibinskayaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
