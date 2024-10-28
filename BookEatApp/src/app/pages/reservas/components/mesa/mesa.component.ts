import { Component, input, Input } from '@angular/core';
import { Mesa } from '../../../../core/models/Mesa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'MesaObject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mesa.component.html',
  styleUrl: './mesa.component.scss'
})
export class MesaComponent {
  
  public MesaInfo = input.required<Mesa>();
  modalOpen: boolean = false;


  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }


  reserveTable() {
    
  }

}
