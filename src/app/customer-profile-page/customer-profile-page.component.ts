import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { CustomerInfomationComponent } from '../customer-infomation/customer-infomation.component';
import { CustomerAddressComponent } from '../customer-address/customer-address.component';
import { CustomerCreditComponent } from '../customer-credit/customer-credit.component';

enum Section {
  PERSONAL = 'personal',
  ADDRESS = 'address',
  CREDIT_CARD = 'creditCard',
}

@Component({
  selector: 'app-customer-profile-page',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CommonModule,
    CustomerInfomationComponent,
    CustomerAddressComponent,
    CustomerCreditComponent,
  ],
  templateUrl: './customer-profile-page.component.html',
  styleUrl: './customer-profile-page.component.css',
})
export class CustomerProfilePageComponent {
  Section = Section;
  selectionSection: string = this.Section.PERSONAL;

  menuItems = [
    {
      section: Section.PERSONAL,
      label: 'ข้อมูลส่วนตัว',
      icon: '/icons/mdi_account.png',
    },
    {
      section: Section.ADDRESS,
      label: 'ที่อยู่การจัดส่ง',
      icon: '/icons/icon_Vector.png',
    },
    {
      section: Section.CREDIT_CARD,
      label: 'ช่องทางการชำระเงิน',
      icon: '/icons/icon_credit01.png',
    },
    {
      section: 'logout',
      label: 'ออกจากระบบ',
      icon: '/icons/icon_mynaui_logout.png',
    },
  ];

  selectSection(section: string) {
    if (section === 'logout') {
      this.logout();
    } else {
      this.selectionSection = section;
    }
  }

  logout() {
    console.log('Logged out');
    // Implement logout logic here
  }
}
