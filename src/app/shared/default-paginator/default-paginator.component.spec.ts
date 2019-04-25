import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPaginatorComponent } from './default-paginator.component';

describe('DefaultPaginatorComponent', () => {
  let component: DefaultPaginatorComponent;
  let fixture: ComponentFixture<DefaultPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
