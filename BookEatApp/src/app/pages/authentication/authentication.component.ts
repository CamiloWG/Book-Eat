import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

  viewLogin: boolean = true;

  registerForm = signal<FormGroup>(new FormGroup(
      {
        nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
        telefono: new FormControl('', [Validators.required, Validators.minLength(5)]),
        contraseña: new FormControl('', [Validators.required, Validators.minLength(5)]) 
      } 
    )
  );

  constructor(private authService: AuthenticationService) {}

  goToPage(page: string) {
    this.viewLogin = page == 'login';
  }


  onRegisterSubmit() {
    if(this.registerForm().valid) {
      this.authService.crearUsuario(this.registerForm().value).subscribe(respuesta => {
          if(respuesta.code == 200) {
            this.viewLogin = true;
            Swal.fire({
              title: 'Exito',
              text: 'Usuario creado exitosamente, por favor inicia sesión',
              icon: 'success',
              confirmButtonText: 'Aceptar'
            });
          }
      });
    }
  }
}
