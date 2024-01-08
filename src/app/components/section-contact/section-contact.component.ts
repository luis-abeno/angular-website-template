import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SharedModule } from '../../shared.module';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss',
})
export class SectionContactComponent {
  @ViewChild('contact') contactSection: ElementRef | undefined;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    let pos = window.scrollY;
    let contactSection = this.contactSection?.nativeElement as HTMLElement;
    let viewportHeight = window.innerHeight;
    if (pos > 1800 && contactSection) {
      let percentage = (pos - 1800) / viewportHeight;
      if (percentage > 1) percentage = 1;
      if (percentage < 0) percentage = 0;
      let translateY = 100 - percentage * 100;
      contactSection.style.transform = `translateY(${translateY}%)`;
    }
  }
}
