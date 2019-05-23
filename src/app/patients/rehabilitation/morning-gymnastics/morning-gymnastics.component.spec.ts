import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MorningGymnasticsComponent} from './morning-gymnastics.component';

describe('MorningGymnasticsComponent', () => {
  let component: MorningGymnasticsComponent;
  let fixture: ComponentFixture<MorningGymnasticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MorningGymnasticsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorningGymnasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
