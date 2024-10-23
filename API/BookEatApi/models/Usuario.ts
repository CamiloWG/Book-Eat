import type { Reserva } from "./Reserva.ts";


export interface Usuario {
    nombre: string,
    telefono: string,
    correo: string,
    contraseña: string,
    rol: number,
    reservas: Reserva[]
}