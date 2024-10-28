import { Component } from '@angular/core';
import { Mesa } from '../../core/models/Mesa';
import { MesasService } from '../../core/services/mesas.service';
import { Reserva } from '../../core/models/Reserva';
import { Usuario } from '../../core/models/Usuario';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { MesaComponent } from "./components/mesa/mesa.component";

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [MesaComponent],
  templateUrl: './reservas.component.html',
  styleUrl: './reservas.component.scss'
})
export class ReservasComponent {
  mesasCatalog: Mesa[] = [];
  reservasCatalog: Reserva[] = [];

  Usuario: Usuario = {} as Usuario;

  constructor(private mesaService: MesasService, private userService: AuthenticationService, private router: Router) {
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


}
