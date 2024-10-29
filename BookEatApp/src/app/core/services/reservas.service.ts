import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private urlCrearReserva: string = "http://localhost:8000/reserva";

  constructor(private http: HttpClient) { }

  crearReserva(data: any): Observable<any> {
    return this.http.post<string>(this.urlCrearReserva, data);
  }
}
