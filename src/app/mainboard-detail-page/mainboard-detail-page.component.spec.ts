import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainboardDetailPageComponent } from './mainboard-detail-page.component';

describe('MainboardDetailPageComponent', () => {
  let component: MainboardDetailPageComponent;
  let fixture: ComponentFixture<MainboardDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainboardDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainboardDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
