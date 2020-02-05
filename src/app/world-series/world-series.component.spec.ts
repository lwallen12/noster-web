import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldSeriesComponent } from './world-series.component';

describe('WorldSeriesComponent', () => {
  let component: WorldSeriesComponent;
  let fixture: ComponentFixture<WorldSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
