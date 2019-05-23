import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {KlabchukIndexComponent} from './klabchuk-index.component';

describe('KlabchukIndexComponent', () => {
  let component: KlabchukIndexComponent;
  let fixture: ComponentFixture<KlabchukIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KlabchukIndexComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlabchukIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
