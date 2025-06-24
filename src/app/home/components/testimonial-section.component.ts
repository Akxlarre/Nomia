import { Component, AfterViewInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-testimonial-section',
  template: `
    <section class="py-16 px-6">
      <div
        class="max-w-md mx-auto bg-base-200 rounded-xl p-6 text-center transition-all duration-700"
        [class.opacity-0]="!loaded"
      >
        <div class="w-16 h-16 mx-auto mb-4 bg-secondary rounded-full grid place-items-center">
          <span class="material-icons text-base-100 text-3xl">star</span>
        </div>
        <p class="text-xl italic text-base-content/80 mb-2">
          “Cuando vi el nombre, sentí que era exactamente lo que buscaba...”
        </p>
        <p class="font-serif font-semibold">Luna Mística</p>
      </div>
    </section>
  `,
})
export class TestimonialSectionComponent implements AfterViewInit {
  loaded = false;
  ngAfterViewInit() {
    setTimeout(() => (this.loaded = true));
  }
}
