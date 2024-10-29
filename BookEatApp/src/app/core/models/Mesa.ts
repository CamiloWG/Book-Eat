import type { Reserva } from "./Reserva.ts";



export interface Mesa {
    id: number,
    sillas: number,
    reservas: number[]
}