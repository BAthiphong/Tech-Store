import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSupplyDetailPageComponent } from './power-supply-detail-page.component';

describe('PowerSupplyDetailPageComponent', () => {
  let component: PowerSupplyDetailPageComponent;
  let fixture: ComponentFixture<PowerSupplyDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerSupplyDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerSupplyDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
