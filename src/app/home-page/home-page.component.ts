import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ImagesHeaderSlideComponent } from '../images-header-slide/images-header-slide.component';
import { ProductCategotyComponent } from '../product-categoty/product-categoty.component';
import { SpecialProductPriceComponent } from '../special-product-price/special-product-price.component';
import { ProductSlideComponent } from '../product-slide/product-slide.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    ImagesHeaderSlideComponent,
    ProductCategotyComponent,
    SpecialProductPriceComponent,
    ProductSlideComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
