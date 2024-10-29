import type { AppData } from "../Data/AppData.ts";
import { Rol } from "../Models/Rol.ts";


export class UsuarioController {
    private data: AppData;
    private counter: number = 0;

    constructor(data: AppData) {
        this.data = data;
    }

    CrearUsuario(nombre: string, telefono: string, contraseña: string, rol: Rol = Rol.USER_ROL) {
        const user = {
            id: ++this.counter,
            nombre: nombre,
            telefono: telefono,
            contraseña: contraseña,
            rol: rol,
            reservasIds: []
        }

        this.data.insertarUsuario(user);
    }

    ObtenerUsuarios() {
        return this.data.obtenerUsuario();
    }

    ObtenerUsuario(IdUsuario: number) {
        return this.data.obtenerUsuario(IdUsuario);
    }

    ObtenerUsuarioPorNombre(User: string) { 
        return this.data.obtenerUsuarioPorNombre(User);
    }
}