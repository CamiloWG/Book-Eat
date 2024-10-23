import type { Reserva } from "./Reserva.ts";


export interface Mesa {
    sillas: number,
    numero: number,
    reservas: Reserva[]
}