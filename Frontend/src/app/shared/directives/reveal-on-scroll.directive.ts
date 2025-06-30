import { Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnDestroy {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {
    this.observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate-fade-in-up');
          this.el.nativeElement.classList.remove('opacity-0');
          this.observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.el.nativeElement.classList.add('opacity-0');
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
