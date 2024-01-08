import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-section-banner',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './section-banner.component.html',
  styleUrl: './section-banner.component.scss',
})
export class SectionBannerComponent {}
