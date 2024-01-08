import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PortfolioItem } from '../../models/portfolio.model';
import { SharedModule } from '../../shared.module';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-section-portfolio',
  standalone: true,
  imports: [SharedModule, PortfolioItemComponent],
  templateUrl: './section-portfolio.component.html',
  styleUrl: './section-portfolio.component.scss',
  animations: [
    trigger('visibilityChanged', [
      state('shown', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidden', style({ opacity: 0, transform: 'scale(0.0)' })),
      transition('* => *', animate('.5s')),
    ]),
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateX(-100%)',
        })
      ),
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('{{delay}}ms ease-in')),
    ]),
  ],
})
export class SectionPortfolioComponent {
  @ViewChild('portfolio') portfolioSection: ElementRef | undefined;
  public portfolioItems: PortfolioItem[] = [];
  public visibility = 'hidden';
  public totalItems = 0;
  state = 'hide';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPortfolio();
  }

  public async getPortfolio() {
    this.http
      .get<PortfolioItem[]>('assets/portfolio_data.json')
      .subscribe((data: PortfolioItem[]) => {
        // Paginate the portfolio items to show only 3 items per page
        this.portfolioItems = data.slice(0, 3);
        this.totalItems = data.length;
      });
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && this.visibility === 'hidden') {
          this.visibility = 'shown';
        }
      });
    });

    observer.observe(this.portfolioSection!.nativeElement);
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.portfolioSection) {
      const componentPosition = this.portfolioSection.nativeElement.offsetTop;
      const scrollPosition = window.scrollY + 300;

      if (scrollPosition >= componentPosition) {
        this.state = 'show';
      } else {
        this.state = 'hide';
      }
    }
  }

  public loadMore() {
    this.http
      .get<PortfolioItem[]>('assets/portfolio_data.json')
      .subscribe((data: PortfolioItem[]) => {
        const nextItems = data.slice(
          this.portfolioItems.length,
          this.portfolioItems.length + 3
        );
        this.portfolioItems = this.portfolioItems.concat(nextItems);
      });
  }
}
