import { Component, signal } from '@angular/core';
import { Mesa } from '../../core/models/Mesa';
import { MesasService } from '../../core/services/mesas.service';
import { Reserva } from '../../core/models/Reserva';
import { Usuario } from '../../core/models/Usuario';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { MesaComponent } from "./components/mesa/mesa.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservasService } from '../../core/services/reservas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [MesaComponent, CommonModule, FormsModule],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {
  

  currentTime!: string;
  mesasCatalog: Mesa[] = [];
  reservasCatalog: Reserva[] = [];

  modalOpen: boolean = false;
  currentTable: Mesa = {} as Mesa;
  reservationDate!: string;
  reservationTime!: string;

  Usuario: Usuario = {} as Usuario;

  constructor(private mesaService: MesasService, private userService: AuthenticationService, private reservaService: ReservasService, private router: Router) {
    mesaService.obtenerMesas().subscribe(respuesta => {
      this.mesasCatalog = respuesta;
    });

    const IdUser: string | null = localStorage.getItem("USER_LOGGED_ID");
    if(IdUser) {
      userService.obtenerUsuario(IdUser).subscribe(user => {
        this.Usuario = user;
      });
    } else {
      alert("Error de usuario");
      router.navigate(['/']);
    }
  }

  ngOnInit() { 
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()+1).padStart(2, '0'); 

    this.currentTime = `${year}-${month}-${day}`;
  }

  openModal(mesa: Mesa) {
    this.currentTable = mesa;
    this.modalOpen = true;
  }

 

  reserveTable() {
    if (this.reservationDate && this.reservationTime) {
      const hora = this.reservationTime[0] + this.reservationTime[1] + ':00';
      this.reservaService.crearReserva({fecha: this.reservationDate, hora, idMesa: this.currentTable.id, idUser: this.Usuario.id}).subscribe(resp => {
        Swal.fire({
          title: resp.code == 200 ? 'Exito' : 'Error',
          text: resp.code == 200 ? resp.message + '\n' + 'con fecha: '+ this.reservationDate + ' a las ' + hora : resp.message,
          icon: resp.code == 200 ? 'success' : 'error',
          confirmButtonText: 'Aceptar'
        });
        this.modalOpen = false;
      })
    }
    
  }
}
