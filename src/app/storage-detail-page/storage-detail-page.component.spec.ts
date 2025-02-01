import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageDetailPageComponent } from './storage-detail-page.component';

describe('StorageDetailPageComponent', () => {
  let component: StorageDetailPageComponent;
  let fixture: ComponentFixture<StorageDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StorageDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorageDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
