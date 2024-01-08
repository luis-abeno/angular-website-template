import { Component, HostListener } from '@angular/core';
import { ThemeModeSwitcherComponent } from '../theme-mode-switcher/theme-mode-switcher.component';
import { SharedModule } from '../../shared.module';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ThemeModeSwitcherComponent,
    LanguageSwitcherComponent,
    SharedModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  menuActive = false;
  sections = [
    { name: 'banner', id: 'banner' },
    { name: 'about', id: 'about' },
    { name: 'portfolio', id: 'portfolio' },
    { name: 'contact', id: 'contact' },
  ];

  activeSection = this.sections[0].id;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const logoI2_i = document.getElementById('logo-i2-i');
    const logoI2_2 = document.getElementById('logo-i2-2');
    const navbar = document.getElementById('navbar');

    if (navbar && logoI2_i && logoI2_2) {
      if (window.scrollY > 500) {
        logoI2_i.classList.add('logo-in-menu');
        logoI2_2.classList.add('logo-in-menu');
      }

      if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
        logoI2_i.classList.remove('logo-in-menu');
        logoI2_2.classList.remove('logo-in-menu');
      }
    }

    for (const section of this.sections) {
      const element = document.getElementById(section.id);
      if (element) {
        if (window.scrollY > 2600) {
          this.activeSection = this.sections[3].id;
          break;
        }

        if (this.isElementInViewport(element)) {
          this.activeSection = section.id;
          break;
        }
      }
    }
  }

  toggleMenu = () => (this.menuActive = !this.menuActive);

  isElementInViewport(el: Element) {
    const rect = el.getBoundingClientRect();
    const mainMenuHeight = 110;

    return (
      rect.top - mainMenuHeight <
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom - mainMenuHeight > 0
    );
  }
}
