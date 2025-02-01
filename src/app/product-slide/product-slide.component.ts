import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  images: string;
}

@Component({
  selector: 'app-product-slide',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './product-slide.component.html',
  styleUrl: './product-slide.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductSlideComponent implements OnInit{
  private jsonUrl = 'json/product-slide.json';
  images: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProductImages();
    
  }

  loadProductImages(): void {
    this.http.get<Product[]>(this.jsonUrl).subscribe((products) => {
      this.images = products.map((product) => ({
        source: product.images,
        alt: product.name,
        name: product.name,
        price: product.price
      }));
    });
  }

  // images: any[] = [
  //   { source: 'https://placehold.co/206x163', alt: 'Image 1', title: 'Title 1' },
  //   { source: 'https://placehold.co/206x163', alt: 'Image 2', title: 'Title 2' },
  //   { source: 'https://placehold.co/206x163', alt: 'Image 3', title: 'Title 3' },
  //   { source: 'https://placehold.co/206x163', alt: 'Image 4', title: 'Title 4' },
  //   { source: 'https://placehold.co/206x163', alt: 'Image 5', title: 'Title 5' },
  //   { source: 'https://placehold.co/206x163', alt: 'Image 6', title: 'Title 6' },
  //   // เพิ่มรูปภาพตามต้องการ
  // ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

}
