import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolerDetailPageComponent } from './cooler-detail-page.component';

describe('CoolerDetailPageComponent', () => {
  let component: CoolerDetailPageComponent;
  let fixture: ComponentFixture<CoolerDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoolerDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoolerDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
