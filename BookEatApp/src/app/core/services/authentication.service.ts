import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private UrlCrearUsuario: string = 'http://localhost:8000/usuario';
  private UrlLogearUsuario: string = 'http://localhost:8000/login';

  constructor(private http: HttpClient) { }

  crearUsuario(data: any): Observable<any> {
    return this.http.post<string>(this.UrlCrearUsuario, data);
  }

  logearUsuario(data: any): Observable<any> {
    return this.http.post<string>(this.UrlLogearUsuario, data);
  } 

  obtenerUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.UrlCrearUsuario+'/'+id);
  }
}
