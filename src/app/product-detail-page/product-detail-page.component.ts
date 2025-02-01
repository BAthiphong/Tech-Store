import { Component } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProductSlideComponent } from '../product-slide/product-slide.component';
import { ButtonModule } from 'primeng/button';
import { Product } from './product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [
    NavbarComponent,
    GalleriaModule,
    ButtonModule,
    FooterComponent,
    ProductSlideComponent,
    CommonModule,
  ],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.css',
})
export class ProductDetailPageComponent {
  images: any[] = [];
  responsiveOptions: any[];
  activeIndex: number = 0;
  numOfProduct: number = 0;

  product: Product = {
    name: '',
    description: '',
    price: 0,
    quantity: 0,
    images: [],
    type: '',
    details: {
      brands: '',
      warranty: '',
      dimension: '',

      series: '',
      processorNumber: '',
      socketType: '',
      coresThreads: '',
      baseFrequency: '',
      maxTurboFrequency: '',
      l2Cache: '',
      l3Cache: '',
      graphicsModels: '',
      bitSupport: '',
      cpuCooler: '',
      maximumTurboPower: '',

      displaySize: '',
      panelSize: '',
      resolution: '',
      resolutionType: '',
      displayColor: '',
      displayViewingArea: '',
      brightness: [''], // Initialized with an empty string for the first input
      contrastRatio: '',
      responseTime: '',
      aspectRatio: '',
      refreshRate: '',
      screenCurvature: '',
      pixelPitch: '',
      viewingAngle: '',
      colorGamut: '',
      hdrSupport: '',
      adaptiveSync: [''], // Initialized similarly
      displaySurface: '',
      flickerFree: '',
      lowBlueLight: '',
      connectivity: [''], // Initialized similarly
      signalFrequency: '',
      powerConsumption: [''], // Initialized similarly
      mechanical: [''],
      weight: [''],
      color: '',

      cpuSupport: '',
      cpuSocket: '',
      memorySlots: '',
      memoryType: '',
      maxMemmory: '',
      onboardGraphics: '',
      onboardAudioShipset: '',
      expansionSlots: [''],
      storage: [''],
      rearPanel: [''],
      lanChipset: '',
      lanSpeed: '',
      dimensions: '',
      powerPin: '',
      formFactor: '',
      chipset: '',
      audioChanels: '',

      gpuSeries: '',
      gpuModel: '',
      memorySize: '',
      busStandard: '',
      cudaCore: '',
      memoryInterface: '',
      boostClock: '',
      baseClock: '',
      memoryClock: '',
      maxDigitalResolution: '',
      hdmiPort: '',
      displayPort: '',
      coolerFan: '',
      powerConector: '',
      powerRequirement: '',

      memorySeries: '',
      memoryCapacity: '',
      casLatency: '',
      testedlatency: '',
      sdpVoltage: '',
      memoryColor: '',

      capacity: '',
      interface: '',
      readSpeed: '',
      writeSpeed: '',

      coolerModel: '',
      exteriorColor: '',
      cpuSocketCooler: [''],
      radiatorDimension: '',
      readiatorMeterail: '',
      radiatorSize: '',
      thermalDesignPower: '',
      pumpSpeed: '',
      fanDimensions: '',
      fanLedType: '',
      fanSpeed: '',
      fanAirflow: '',
      fanNoise: '',
      fanConnector: '',
      coolerWeight: '',
      coolerType: '',

      tiltScrollFunction: '',
      clickLifeSpan: '',
      scrollWhell: '',
      nummerOfButtons: '',
      batterryLife: '',
      batterryType: '',
      mouseInterface: '',
      sensorResolution: '',
      sensorTechnology: '',
      wirelessTechnology: '',

      switchName: '',
      keyboardConnectivity: '',
      lighting: '',
      localization: '',
      materail: '',
      wirelessFrequency: '',
      batteryTypeAndQuantity: '',
      keyboardWeight: '',
      usbPort: '',
      type: '',
      wiredOrWireless: '',

      connector: '',
      driverUnit: '',
      frequencyResponse: '',
      sensitivity: '',
      inputImpedance: '',
      micFrequencyResponse: '',
      micSensitivity: '',
      micImpedance: '',
      cordLenght: '',

      energyEfficient: '',
      modular: '',
      continuousPowerW: '',
      psuFormFactor: '',
      mbConnector: '',
      cpuConnector: '',
      pcieConnector: [''],
      sataConnector: '',
      fanSize: '',
      psuWeight: '',
      protection: '',
      powerRage: '',

      model: '',
      mainboardSupport: [''],
      vgaSupport: '',
      cpuCoolerSupport: '',
      powerSupplySupport: '',
      frontIO: '',
      caseExpansionSlots: '',
      driveBaysSupport: '',
      fanInstallment: '',
      fanSupportFront: '',
      fanSupportTop: '',
      fanSupportSide: '',
      fanSupportRear: '',
      fanSupportBottom: '',
      maxRadiatorSupport: '',
      radidatorSupportFront: '',
      radiatorSupportTop: '',
      radiatoSupportSide: '',
      radiatorSupportRear: '',
      radiatorSupportBottom: '',
      accessories: '',
      caseWeight: '',
    },
  };

  isExpanded = false; // ใช้สำหรับควบคุมสถานะการแสดงข้อมูล

  toggleContent(): void {
    this.isExpanded = !this.isExpanded; // สลับสถานะ
  }

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private viewportScroller: ViewportScroller,
    private router: Router
  ) {
    // this.images = [
    //   {
    //     itemImageSrc: 'https://placehold.co/505x320',
    //     thumbnailImageSrc: 'https://placehold.co/93x93',
    //   },
    //   {
    //     itemImageSrc: 'https://placehold.co/505x320',
    //     thumbnailImageSrc: 'https://placehold.co/100x93',
    //   },
    //   {
    //     itemImageSrc: 'https://placehold.co/505x320',
    //     thumbnailImageSrc: 'https://placehold.co/93x93',
    //   },
    //   {
    //     itemImageSrc: 'https://placehold.co/505x320',
    //     thumbnailImageSrc: 'https://placehold.co/93x93',
    //   },
    //   {
    //     itemImageSrc: 'https://placehold.co/505x320',
    //     thumbnailImageSrc: 'https://placehold.co/93x93',
    //   },
    // ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }

  prev() {
    this.activeIndex =
      this.activeIndex === 0 ? this.images.length - 1 : this.activeIndex - 1;
  }

  next() {
    this.activeIndex =
      this.activeIndex === this.images.length - 1 ? 0 : this.activeIndex + 1;
  }

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(productId).subscribe(
        (data) => {
          if (data) {
            this.product = data; // รับข้อมูลสินค้าที่จะทำการแก้ไข
            this.images = this.product.images.map((img) => ({
              itemImageSrc: img, // Assuming each item is a URL to the image
              thumbnailImageSrc: img, // Use same URL or different if available
            }));
            // เลื่อนหน้าไปที่ด้านบนเมื่อโหลดหน้าเสร็จ
            this.viewportScroller.scrollToPosition([0, 0]);
            console.log(this.product.details);
          } else {
            console.warn('Product not found or data is null');
          }
        },
        (error) => {
          console.error('Error fetching product data:', error);
        }
      );
    }
  }
}
