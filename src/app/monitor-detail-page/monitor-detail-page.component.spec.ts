import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorDetailPageComponent } from './monitor-detail-page.component';

describe('MonitorDetailPageComponent', () => {
  let component: MonitorDetailPageComponent;
  let fixture: ComponentFixture<MonitorDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonitorDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
