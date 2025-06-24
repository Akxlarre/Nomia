import { Component } from '@angular/core';
import { HeroSectionComponent } from '../components/hero-section.component';
import { StepsSectionComponent } from '../components/steps-section.component';
import { BenefitsSectionComponent } from '../components/benefits-section.component';
import { TestimonialSectionComponent } from '../components/testimonial-section.component';
import { PremiumCardPreviewComponent } from '../components/premium-card-preview.component';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [
    HeroSectionComponent,
    StepsSectionComponent,
    BenefitsSectionComponent,
    TestimonialSectionComponent,
    PremiumCardPreviewComponent,
  ],
  template: `
    <app-hero-section />
    <app-steps-section />
    <app-benefits-section />
    <app-testimonial-section />
    <app-premium-card-preview />
  `,
})
export class HomePage {}
