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
  }
}