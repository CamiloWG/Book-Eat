
import type { Reserva } from "./Reserva.ts";
import { Rol } from "./Rol.js";


export interface Usuario {
    id: number,
    nombre: string,
    telefono: string,
    contraseña: string,
    rol: Rol,
    reservas: Reserva[]
}