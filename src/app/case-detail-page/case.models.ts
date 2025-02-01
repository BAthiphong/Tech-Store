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
    formFactor: '',

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
    color: '',
    dimensions: '',
  }
}
