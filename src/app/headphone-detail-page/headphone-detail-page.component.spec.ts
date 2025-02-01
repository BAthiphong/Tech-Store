import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadphoneDetailPageComponent } from './headphone-detail-page.component';

describe('HeadphoneDetailPageComponent', () => {
  let component: HeadphoneDetailPageComponent;
  let fixture: ComponentFixture<HeadphoneDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadphoneDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadphoneDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
