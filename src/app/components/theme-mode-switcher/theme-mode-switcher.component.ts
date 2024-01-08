import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-theme-mode-switcher',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './theme-mode-switcher.component.html',
  styleUrl: './theme-mode-switcher.component.scss',
})
export class ThemeModeSwitcherComponent {
  currentTheme: string;

  constructor(private themeService: ThemeService) {
    this.currentTheme = this.themeService.getTheme();
  }

  ngOnInit(): void {
    this.themeService.theme$.subscribe((theme) => {
      const body = document.body;
      if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        this.currentTheme = 'dark';
      } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        this.currentTheme = 'light';
      }
    });
  }

  toggleTheme(): void {
    const newTheme =
      this.themeService.getTheme() === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(newTheme);
  }
}
