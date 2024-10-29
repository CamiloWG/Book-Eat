import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/Reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  private urlCrearReserva: string = "http://localhost:8000/reserva";
  private urlObtenerReserva: string = "http://localhost:8000/reservas";
  private urlEliminarReserva: string = "http://localhost:8000/reservaEliminar";


  constructor(private http: HttpClient) { }

  crearReserva(data: any): Observable<any> {
    return this.http.post<string>(this.urlCrearReserva, data);
  }

  obtenerReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.urlObtenerReserva);
  }

  eliminarReserva(idReserva: number): Observable<any> {
    return this.http.post<string>(this.urlEliminarReserva, idReserva);
  }
}
