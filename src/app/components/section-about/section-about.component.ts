import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-section-about',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './section-about.component.html',
  styleUrl: './section-about.component.scss',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidden', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('* => *', animate('.5s')),
    ]),
  ],
})
export class SectionAboutComponent {
  @ViewChild('about') aboutSection: ElementRef | undefined;

  visibility = 'hidden';

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.visibility = entry.isIntersecting ? 'shown' : 'hidden';
      });
    });

    observer.observe(this.aboutSection!.nativeElement);
  }
}
