import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpuDetailPageComponent } from './gpu-detail-page.component';

describe('GpuDetailPageComponent', () => {
  let component: GpuDetailPageComponent;
  let fixture: ComponentFixture<GpuDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GpuDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GpuDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
