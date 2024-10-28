import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../core/services/authentication.service';

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
          console.log(respuesta);
          
      });
    }
  }
}
