
import type { Mesa } from "../Models/Mesa.ts";
import type { Reserva } from "../Models/Reserva.ts";
import type { Usuario } from "../Models/Usuario.ts";
import type { RawData } from "./IData.ts";

export class AppData {
    private data: RawData;

    constructor() {
        this.data = {
            usuarios: [],
            mesas: [],
            reservas: []
        }
    }

    insertarUsuario(user: Usuario): void {
        this.data.usuarios.push(user);
    }

    insertarMesa(mesa: Mesa): void {
        this.data.mesas.push(mesa);
    }

    insertarReserva(reserva: Reserva): void {
        this.data.reservas.push(reserva);
    }

    obtenerUsuario(idUsuario?: number): Usuario | Usuario[] | undefined {
        return idUsuario ? this.data.usuarios.find(user => user.id == idUsuario) : this.data.usuarios;
    }

    obtenerMesa(idMesa?: number): Mesa | Mesa[] | undefined {
        return idMesa ? this.data.mesas.find(mesa => mesa.id == idMesa) : this.data.mesas;
    }

    obtenerReserva(idReserva?: number): Reserva | Reserva[] | undefined {
        return idReserva ? this.data.reservas.find(reserva => reserva.id == idReserva) : this.data.reservas;
    }

    eliminarReserva(idReserva: number): void {
        const index: number = this.data.reservas.findIndex(reserva => reserva.id == idReserva);
        if(index != -1) {
            this.data.reservas.splice(index, 1);
        }
    }

}