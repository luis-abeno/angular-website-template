import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemStackComponent } from './portfolio-item-stack.component';

describe('PortfolioItemStackComponent', () => {
  let component: PortfolioItemStackComponent;
  let fixture: ComponentFixture<PortfolioItemStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioItemStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioItemStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
