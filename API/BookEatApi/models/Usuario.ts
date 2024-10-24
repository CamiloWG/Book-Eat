import type { Reserva } from "./Reserva.ts";


export interface Usuario {
    id: number,
    nombre: string,
    telefono: string,
    correo: string,
    contraseña: string,
    rol: number,
    reservas: Reserva[]
}