import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRateComponent } from './daily-rate.component';

describe('DailyRateComponent', () => {
  let component: DailyRateComponent;
  let fixture: ComponentFixture<DailyRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });kkk

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
