import type { Mesa } from "./Mesa.ts";
import type { Usuario } from "./Usuario.ts";

export interface Reserva {
    id: number,
    fecha: Date,
    hora: string,
    mesa: Mesa,
    usuario: Usuario
}