import type { AppData } from "../Data/AppData.ts";


export class MesaController {
    private data: AppData;
    private counter: number = 0;

    constructor(data: AppData) {
        this.data = data;
    }

    CrearMesa(sillas: number) {
        const mesa = {
            id: ++this.counter,
            sillas: sillas,
            reservas: []
        };

        this.data.insertarMesa(mesa);
    }

    ObtenerMesas() {
        return this.data.obtenerMesa();
    }

    ObtenerMesa(idMesa: number) {
        return this.data.obtenerMesa(idMesa);
    }
}