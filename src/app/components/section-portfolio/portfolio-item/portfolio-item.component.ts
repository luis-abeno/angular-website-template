import { Component, Input } from '@angular/core';
import { PortfolioItem } from '../../../models/portfolio.model';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../../shared.module';
import { PortfolioItemStackComponent } from '../portfolio-item-stack/portfolio-item-stack.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio-item',
  standalone: true,
  imports: [SharedModule, PortfolioItemStackComponent],
  templateUrl: './portfolio-item.component.html',
  styleUrl: './portfolio-item.component.scss',
})
export class PortfolioItemComponent {
  @Input() portfolioItem: PortfolioItem | undefined;
  @Input() index: number | undefined;
  public selectedItem: PortfolioItem | undefined = {} as PortfolioItem;
  public currentImageIndex = 0;
  public openCarousel = false;

  public currentLang = this.translate.currentLang;

  private langChangeSubscription: Subscription | undefined;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.currentLang = this.translate.currentLang;

    this.langChangeSubscription = this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        this.currentLang = event.lang;
      }
    );
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  public openPortfolioItemCarousel(portfolioItem: PortfolioItem): void {
    this.currentImageIndex = 0;
    this.openCarousel = true;
    this.selectedItem = portfolioItem;
  }

  public nextImage(): void {
    if (this.selectedItem) {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.selectedItem.images.length;
    }
  }

  public previousImage(): void {
    if (this.selectedItem) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.selectedItem.images.length) %
        this.selectedItem.images.length;
    }
  }

  public closeCarousel(): void {
    this.selectedItem = undefined;
  }
}
