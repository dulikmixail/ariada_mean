import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalGymnasticsComponent } from './medical-gymnastics.component';

describe('MedicalGymnasticsComponent', () => {
  let component: MedicalGymnasticsComponent;
  let fixture: ComponentFixture<MedicalGymnasticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalGymnasticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalGymnasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
