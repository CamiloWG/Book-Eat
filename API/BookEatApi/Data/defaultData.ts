import { MesaController } from "../Controllers/MesaController.ts";
import { UsuarioController } from "../Controllers/UsuarioController.ts";
import { Rol } from "../Models/Rol.ts"; 


export function initializeData(userController: UsuarioController, mesaController: MesaController): void {
     userController.CrearUsuario("admin", "3123123", "admin", Rol.ADMIN_ROL);
     userController.CrearUsuario("user", "4535234", "user");
     mesaController.CrearMesa(6);
     mesaController.CrearMesa(2);
     mesaController.CrearMesa(2);
     mesaController.CrearMesa(4);
     mesaController.CrearMesa(4);
     mesaController.CrearMesa(4);
     mesaController.CrearMesa(4);
     mesaController.CrearMesa(6);
     mesaController.CrearMesa(2);
     mesaController.CrearMesa(2);
     mesaController.CrearMesa(4);
     mesaController.CrearMesa(6);
}