import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SectionBannerComponent } from './components/section-banner/section-banner.component';
import { SectionAboutComponent } from './components/section-about/section-about.component';
import { SectionPortfolioComponent } from './components/section-portfolio/section-portfolio.component';
import { SharedModule } from './shared.module';
import { TranslateService } from '@ngx-translate/core';
import { SectionContactComponent } from './components/section-contact/section-contact.component';
import { I18NService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    RouterOutlet,
    NavbarComponent,
    SectionBannerComponent,
    SectionAboutComponent,
    SectionPortfolioComponent,
    SectionContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showBackTop: boolean = false;

  constructor(translate: TranslateService, private I18NService: I18NService) {
    let currentLanguage: string;
    this.I18NService.currentLanguage.subscribe((language) => {
      currentLanguage = language;
      translate.setDefaultLang(currentLanguage);
      translate.use(currentLanguage);
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 500) {
      this.showBackTop = true;
    } else {
      this.showBackTop = false;
    }
  }

  backTop() {
    window.scrollTo(0, 0);
  }
}
