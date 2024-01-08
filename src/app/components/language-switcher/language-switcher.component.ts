import { Component } from '@angular/core';
import { I18NService } from '../../services/i18n.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
})
export class LanguageSwitcherComponent {
  currentLanguage: string = 'en';
  showOptions = false;

  constructor(private I18NService: I18NService) {
    this.I18NService.currentLanguage.subscribe((language) => {
      this.currentLanguage = language;
    });
  }

  switchLanguage(language: string) {
    this.I18NService.switchLanguage(language);
    this.showOptions = false;
  }

  getFlagSrc(language: string) {
    return language === 'en'
      ? '../../../assets/images/flag_united_states.png'
      : '../../../assets/images/flag_brazil.png';
  }
}
