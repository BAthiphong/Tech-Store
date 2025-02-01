export interface Product {
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: string[]; // เก็บอาเรย์ของ URL รูปภาพ
  type?: string; // หรือกำหนดค่า type ตามที่ UpdateProductDto ต้องการ
  details: {
    brands: '',
    warranty: '',
    dimension: '',
    
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
 
  }
}
