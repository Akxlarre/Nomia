import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  PrimaryButtonComponent,
  SecondaryButtonComponent,
  GhostButtonComponent,
  TextInputComponent,
  CheckboxComponent,
  RadioButtonComponent,
  ToggleSwitchComponent,
  CardComponent,
  NatalCardComponent,
  AlertComponent,
  ProgressBarComponent,
  StepperComponent,
} from '../../shared/components';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [
    RouterModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    GhostButtonComponent,
    TextInputComponent,
    CheckboxComponent,
    RadioButtonComponent,
    ToggleSwitchComponent,
    CardComponent,
    NatalCardComponent,
    AlertComponent,
    ProgressBarComponent,
    StepperComponent,
  ],
  template: `
    <section class="text-center py-20 px-6">
      <h1 class="text-4xl font-serif mb-4">El alma ya conoce su nombre</h1>
      <p class="text-base font-sans max-w-md mx-auto mb-8">
        Descubre un nombre simbólico y emocionalmente conectado con tu energía.
      </p>
      <a routerLink="/test" class="btn btn-primary">Comenzar el Test</a>
    </section>

    <section class="max-w-2xl mx-auto p-6 grid gap-4">
      <h2 class="text-2xl font-serif mb-2">Demo de componentes</h2>

      <div class="flex gap-2">
        <ui-primary-button>Primario</ui-primary-button>
        <ui-secondary-button>Secundario</ui-secondary-button>
        <ui-ghost-button>Ghost</ui-ghost-button>
      </div>

      <ui-text-input placeholder="Escribe algo"></ui-text-input>
      <ui-checkbox>Selecciona</ui-checkbox>
      <div class="flex gap-2">
        <ui-radio-button name="demo" value="1" [checked]="true">Opción 1</ui-radio-button>
        <ui-radio-button name="demo" value="2">Opción 2</ui-radio-button>
      </div>
      <ui-toggle-switch>Activar</ui-toggle-switch>

      <ui-card>Una tarjeta sencilla</ui-card>
      <ui-natal-card name="Aura">Nombre místico sugerido</ui-natal-card>

      <ui-alert type="info">Este es un mensaje informativo.</ui-alert>

      <ui-progress-bar [value]="40" [max]="100"></ui-progress-bar>
      <ui-stepper [steps]="['Uno', 'Dos', 'Tres']" [active]="1"></ui-stepper>
    </section>
  `,
})
export class HomePage {}
