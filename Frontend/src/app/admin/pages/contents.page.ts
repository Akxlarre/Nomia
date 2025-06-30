import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminService } from '../services/admin.service';

@Component({
  standalone: true,
  selector: 'app-admin-contents-page',
  imports: [CommonModule, FormsModule],
  template: `
    <h1 class="text-xl font-semibold mb-4">Contenidos</h1>
    <div class="space-y-4">
      <label class="block">
        <span class="block mb-1">Glosario</span>
        <textarea class="textarea textarea-bordered w-full" rows="4" [(ngModel)]="contents.glosario"></textarea>
      </label>
      <button class="btn btn-primary" (click)="save()">Guardar</button>
    </div>
  `,
})
export class ContentsPage implements OnInit {
  contents: any = { glosario: '' };
  constructor(private admin: AdminService) {}
  ngOnInit() {
    this.admin.getContents().subscribe(c => (this.contents = c));
  }
  save() {
    // placeholder save
    alert('Guardado');
  }
}
