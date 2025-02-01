import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardDetailPageComponent } from './keyboard-detail-page.component';

describe('KeyboardDetailPageComponent', () => {
  let component: KeyboardDetailPageComponent;
  let fixture: ComponentFixture<KeyboardDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyboardDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyboardDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
