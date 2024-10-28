import { Mesa } from "../Models/Mesa";
import { Reserva } from "../Models/Reserva";
import { Usuario } from "../Models/Usuario";

export interface RawData {
    mesas: Mesa[],
    reservas: Reserva[],
    usuarios: Usuario[]
}