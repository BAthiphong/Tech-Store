import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamDetailPageComponent } from './ram-detail-page.component';

describe('RamDetailPageComponent', () => {
  let component: RamDetailPageComponent;
  let fixture: ComponentFixture<RamDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RamDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
