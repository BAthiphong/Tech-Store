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
    
    cpuSupport: '',
    cpuSocket: '',
    chipset: '',
    memorySlots: '',
    memoryType: '',
    maxMemmory: '',
    onboardGraphics: '',
    onboardAudioShipset: '',
    audioChanels: '',
    expansionSlots: [''],
    storage: [''],
    rearPanel: [''],
    lanChipset: '',
    lanSpeed: '',
    dimensions: '',
    powerPin: '',
    formFactor: '',
  }
}