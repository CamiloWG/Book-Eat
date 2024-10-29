
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

    obtenerUsuarioPorId(idUsuario: number): Usuario | undefined {
        return this.data.usuarios.find(user => user.id == idUsuario);
    }

    obtenerUsuarioPorNombre(nombre: string): Usuario | undefined {
        return this.data.usuarios.find(user => user.nombre == nombre);
    }

    obtenerMesa(): Mesa[]  {
        return this.data.mesas;
    }

    obtenerMesaPorId(idMesa: number): Mesa | undefined {
        return this.data.mesas.find(mesa => mesa.id == idMesa);
    }

    obtenerReservas(): Reserva[] {
        return this.data.reservas;
    }

    obtenerReservaPorId(idReserva: number): Reserva | undefined {
        return this.data.reservas.find(reserva => reserva.id == idReserva);
    }

    eliminarReserva(idReserva: number): void {
        const index: number = this.data.reservas.findIndex(reserva => reserva.id == idReserva);
        if(index != -1) {
            this.data.reservas.splice(index, 1);
        }
    }

}