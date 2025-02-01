import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


const config = {
  ...appConfig,
  providers : [
    ...appConfig.providers,
    provideHttpClient(),  // ใช้ provideHttpClient() สำหรับ HttpClient
    provideRouter(routes), provideAnimationsAsync(), // เพิ่ม provideRouter พร้อม routes ที่กำหนดไว้
  ]
}

bootstrapApplication(AppComponent, config).catch((err) => console.error(err));
