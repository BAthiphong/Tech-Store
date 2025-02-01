import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesHeaderSlideComponent } from './images-header-slide.component';

describe('ImagesHeaderSlideComponent', () => {
  let component: ImagesHeaderSlideComponent;
  let fixture: ComponentFixture<ImagesHeaderSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesHeaderSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesHeaderSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
