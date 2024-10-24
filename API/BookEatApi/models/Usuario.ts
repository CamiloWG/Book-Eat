import type { Rol } from "../Models/Rol.ts";
import type { Reserva } from "./Reserva.ts";


export interface Usuario {
    id: number,
    nombre: string,
    telefono: string,
    contraseña: string,
    rol: Rol,
    reservas: Reserva[]
}