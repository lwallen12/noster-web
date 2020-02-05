import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentialPredictionComponent } from './presidential-prediction.component';

describe('PresidentialPredictionComponent', () => {
  let component: PresidentialPredictionComponent;
  let fixture: ComponentFixture<PresidentialPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidentialPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentialPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
