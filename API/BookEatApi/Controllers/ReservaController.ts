import type { AppData } from "../Data/AppData.ts";


export class ReservaController {
    private data: AppData;
    private counter: number = 0;

    constructor(data: AppData) {
        this.data = data;
    }

    crearReserva(fecha: Date, IdMesa: number, IdUser: number) {
        const mesa = this.data.obtenerMesaPorId(IdMesa);
        const user = this.data.obtenerUsuarioPorId(IdUser);

        if(mesa && user) { 

            const reserva = {
                id: ++this.counter,
                fecha: fecha,
                hora: fecha.getHours+':'+fecha.getMinutes,
                mesaId: mesa.id,
                usuarioId: user.id
            }

            this.data.insertarReserva(reserva);
        } else console.error('[ERROR] Error al crear reserva, mesa o usuario no encontrado');        
    }

    ObtenerReservas() {
        return this.data.obtenerReserva();
    }

    ObtenerReserva(idReserva: number) {
        return this.data.obtenerReserva(idReserva);
    }
}