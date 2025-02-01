import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInfomationComponent } from './customer-infomation.component';

describe('CustomerInfomationComponent', () => {
  let component: CustomerInfomationComponent;
  let fixture: ComponentFixture<CustomerInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerInfomationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
