import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDetailPageComponent } from './cpu-detail-page.component';

describe('CpuDetailPageComponent', () => {
  let component: CpuDetailPageComponent;
  let fixture: ComponentFixture<CpuDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CpuDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpuDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
