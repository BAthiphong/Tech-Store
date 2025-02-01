import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-images-header-slide',
  standalone: true,
  imports: [CarouselModule, GalleriaModule],
  templateUrl: './images-header-slide.component.html',
  styleUrl: './images-header-slide.component.css'
})
export class ImagesHeaderSlideComponent {
  images = [
    { previewImageSrc: '/images/banner/slide_1.png', thumbnailImageSrc: 'https://placehold.co/100x100' },
    { previewImageSrc: '/images/banner/slide_2.png', thumbnailImageSrc: 'https://placehold.co/100x100' },
    { previewImageSrc: '/images/banner/slide_3.png', thumbnailImageSrc: 'https://placehold.co/100x100' },
    { previewImageSrc: '/images/banner/slide_4.png', thumbnailImageSrc: 'https://placehold.co/100x100' }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];
}
