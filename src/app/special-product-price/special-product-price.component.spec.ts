import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialProductPriceComponent } from './special-product-price.component';

describe('SpecialProductPriceComponent', () => {
  let component: SpecialProductPriceComponent;
  let fixture: ComponentFixture<SpecialProductPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialProductPriceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialProductPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
