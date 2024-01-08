import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared.module';

type PortfolioItemStack = {
  icon: string;
  title: string;
  color: string;
  source?: string;
};

@Component({
  selector: 'app-portfolio-item-stack',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './portfolio-item-stack.component.html',
  styleUrl: './portfolio-item-stack.component.scss',
})
export class PortfolioItemStackComponent {
  @Input() portfolioItemStack: string | undefined;

  public portfolioItemStackData: PortfolioItemStack | undefined;

  ngOnInit(): void {
    if (this.portfolioItemStack) {
      this.getPortfolioStackIcon(this.portfolioItemStack);
    }
  }

  public getPortfolioStackIcon(stack: string): void {
    const stackIcons: { [key: string]: PortfolioItemStack } = {
      angular: { icon: 'fab fa-angular', title: 'Angular', color: '#d6002f' },
      php: { icon: 'fab fa-php', title: 'PHP', color: '#7377ad' },
      bootstrap: {
        icon: 'fab fa-bootstrap',
        title: 'Bootstrap',
        color: '#8311f6',
      },
      css: { icon: 'fab fa-css3-alt', title: 'CSS', color: '#254bdd' },
      html: { icon: 'fab fa-html5', title: 'HTML', color: '#dd4b25' },
      javascript: { icon: 'fab fa-js', title: 'JavaScript', color: '#efd81d' },
      jquery: { icon: 'fas fa-dollar-sign', title: 'jQuery', color: '#20a1d3' },
      nodejs: { icon: 'fab fa-node-js', title: 'NodeJS', color: '#87bf00' },
      react: { icon: 'fab fa-react', title: 'React', color: '#087a9f' },
      sass: { icon: 'fab fa-sass', title: 'Sass', color: '#c76494' },
      vue: { icon: 'fab fa-vuejs', title: 'Vue', color: '#3fb27f' },
      sql: { icon: 'fas fa-database', title: 'SQL', color: '#f29111' },
      mongodb: { icon: 'fas fa-database', title: 'MongoDB', color: '#4cab3d' },
      flutter: {
        icon: 'flutter',
        title: 'Flutter',
        color: '#5cc3f0',
        source: 'material',
      },
      tailwind: { icon: 'tailwind', title: 'Tailwind', color: '#06b6d4' },
      wordpress: {
        icon: 'fab fa-wordpress',
        title: 'WordPress',
        color: '#21759b',
      },
    };
    this.portfolioItemStackData = stackIcons[stack];
  }
}
