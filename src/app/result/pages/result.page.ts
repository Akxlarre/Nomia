// src/app/result/pages/result.page.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NatalCardComponent, PrimaryButtonComponent } from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-result-page',
  imports: [CommonModule, RouterModule, NatalCardComponent, PrimaryButtonComponent],
  template: `
    <section class="max-w-2xl mx-auto px-4 py-16 text-center relative">
      <h1 class="text-4xl md:text-5xl font-serif mb-4">Tu alma ha hablado</h1>
      <p class="text-base md:text-lg mb-8 opacity-80 italic">
        Aquí están los nombres que vibran contigo...
      </p>

      <div class="grid gap-6 md:grid-cols-2">
        <!-- Card 1: gratuita -->
        <ui-natal-card name="Amariel">
          <p class="text-base italic">Significa: “la luz que renace”</p>
        </ui-natal-card>

        <!-- Cards bloqueadas -->
        @for (i of [1, 2, 3, 4]; track i) {
          <div class="relative border border-base-300 bg-base-100 rounded-xl p-6 opacity-60 shadow-inner">
            <p class="text-lg font-serif mb-2 text-base-content/70">🔒 Nombre bloqueado</p>
            <p class="text-sm text-base-content/50">Compra para desbloquear este nombre único.</p>

            <div class="mt-4">
              <a routerLink="/pay">
                <ui-primary-button class="w-full">✨ Ver este nombre</ui-primary-button>
              </a>
            </div>

            <div
              class="absolute -top-4 -right-4 w-10 h-10 bg-accent/20 rounded-full blur-2xl"
              aria-hidden="true"
            ></div>
          </div>
        }
      </div>

      <div class="mt-12">
        <a routerLink="/pay">
          <ui-primary-button class="text-lg px-8 py-4">🔓 Quiero ver más nombres</ui-primary-button>
        </a>
      </div>
    </section>
  `,
})
export class ResultPageComponent {}
