import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDetailPageComponent } from './mouse-detail-page.component';

describe('MouseDetailPageComponent', () => {
  let component: MouseDetailPageComponent;
  let fixture: ComponentFixture<MouseDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MouseDetailPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MouseDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
