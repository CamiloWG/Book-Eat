import type { AppData } from "../Data/AppData.ts";


export class ReservaController {
    private data: AppData;
    private counter: number = 0;

    constructor(data: AppData) {
        this.data = data;
    }
    

    crearReserva(fecha: Date, hora: string, IdMesa: number, IdUser: number) {
        const mesa = this.data.obtenerMesaPorId(IdMesa);
        const user = this.data.obtenerUsuarioPorId(IdUser);

        if(mesa && user) {         
            const reserva = {
                id: ++this.counter,
                fecha: fecha,
                hora: hora,
                mesaId: mesa.id,
                usuarioId: user.id
            }
            user.reservasIds.push(reserva.id);
            mesa.reservasIds.push(reserva.id);
            this.data.insertarReserva(reserva);
        } else console.error('[ERROR] Error al crear reserva, mesa o usuario no encontrado');        
    }

    ObtenerReservas() {
        return this.data.obtenerReservas();
    }

    ObtenerReserva(idReserva: number) {
        return this.data.obtenerReservaPorId(idReserva);
    }
    
    eliminarReserva(IdReserva: number) {
        return this.data.eliminarReserva(IdReserva);
    }
}