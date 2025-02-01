import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CustomerProfilePageComponent } from './customer-profile-page/customer-profile-page.component';
import { CpuDetailPageComponent } from './cpu-detail-page/cpu-detail-page.component';
import { MainboardDetailPageComponent } from './mainboard-detail-page/mainboard-detail-page.component';
import { GpuDetailPageComponent } from './gpu-detail-page/gpu-detail-page.component';
import { RamDetailPageComponent } from './ram-detail-page/ram-detail-page.component';
import { StorageDetailPageComponent } from './storage-detail-page/storage-detail-page.component';
import { PowerSupplyDetailPageComponent } from './power-supply-detail-page/power-supply-detail-page.component';
import { CoolerDetailPageComponent } from './cooler-detail-page/cooler-detail-page.component';
import { MouseDetailPageComponent } from './mouse-detail-page/mouse-detail-page.component';
import { KeyboardDetailPageComponent } from './keyboard-detail-page/keyboard-detail-page.component';
import { MonitorDetailPageComponent } from './monitor-detail-page/monitor-detail-page.component';
import { HeadphoneDetailPageComponent } from './headphone-detail-page/headphone-detail-page.component';
import { CaseDetailPageComponent } from './case-detail-page/case-detail-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'allproducts',
    component: ProductsPageComponent
  },
  {
    path: 'productDetail/:id',
    component: ProductDetailPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "profile",
    component: CustomerProfilePageComponent
  },
  {
    path: 'cpudetail/:id',
    component: CpuDetailPageComponent
  },
  {
    path: 'mainboarddetail/:id',
    component: MainboardDetailPageComponent
  },
  {
    path: 'gpudetail/:id',
    component: GpuDetailPageComponent
  },
  {
    path: 'ramdetail/:id',
    component: RamDetailPageComponent
  },
  {
    path: 'storagedetail/:id',
    component: StorageDetailPageComponent
  },
  {
    path: 'powersupplydetail/:id',
    component: PowerSupplyDetailPageComponent
  },
  {
    path: 'coolerdetail/:id',
    component: CoolerDetailPageComponent
  },
  {
    path: 'mousedetail/:id',
    component: MouseDetailPageComponent
  },
  {
    path: 'keyboarddetail/:id',
    component: KeyboardDetailPageComponent
  },
  {
    path: 'monitordetail/:id',
    component: MonitorDetailPageComponent
  },
  {
    path: 'headphonedetail/:id',
    component: HeadphoneDetailPageComponent
  },
  {
    path: 'casedetail/:id',
    component: CaseDetailPageComponent
  }
];
