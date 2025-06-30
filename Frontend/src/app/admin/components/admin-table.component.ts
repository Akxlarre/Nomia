import { Component, Input, TemplateRef, ContentChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-admin-table',
  imports: [CommonModule],
  template: `
    <table class="table w-full">
      <thead>
        <tr>
          <th *ngFor="let h of headers">{{ h }}</th>
        </tr>
      </thead>
      <tbody>
        <ng-container *ngFor="let row of rows">
          <ng-container *ngTemplateOutlet="rowTemplate; context: { $implicit: row }"></ng-container>
        </ng-container>
      </tbody>
    </table>
  `,
})
export class AdminTableComponent {
  @Input() headers: string[] = [];
  @Input() rows: any[] = [];
  @ContentChild(TemplateRef) rowTemplate!: TemplateRef<any>;
}
