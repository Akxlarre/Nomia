import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';

const COMPONENTS = [
  components.PrimaryButtonComponent,
  components.SecondaryButtonComponent,
  components.GhostButtonComponent,
  components.TextInputComponent,
  components.CheckboxComponent,
  components.RadioButtonComponent,
  components.ToggleSwitchComponent,
  components.CardComponent,
  components.NatalCardComponent,
  components.AlertComponent,
  components.ProgressBarComponent,
  components.StepperComponent,
];

@NgModule({
  imports: [CommonModule, ...COMPONENTS],
  exports: COMPONENTS,
})
export class SharedModule {}
