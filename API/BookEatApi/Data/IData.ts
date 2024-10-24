import type { Mesa } from "../models/Mesa.ts";
import type { Reserva } from "../models/Reserva.ts";
import type { Usuario } from "../models/Usuario.ts";

export interface RawData {
    mesas: Mesa[],
    reservas: Reserva[],
    usuarios: Usuario[]
}