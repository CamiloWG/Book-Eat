import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesa } from '../models/Mesa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  private UrlObtenerMesas: string = "http://localhost:8000/mesas"

  constructor(private http: HttpClient) { }

  obtenerMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(this.UrlObtenerMesas);
  }
}
