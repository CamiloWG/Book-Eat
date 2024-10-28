import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private UrlCrearUsuario: string = 'http://localhost:8000/usuario';

  constructor(private http: HttpClient) { }

  crearUsuario(data: any): Observable<any> {
    return this.http.post<string>(this.UrlCrearUsuario, data);
  }
}
