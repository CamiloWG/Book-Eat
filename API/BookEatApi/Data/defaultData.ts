import { UsuarioController } from "../Controllers/UsuarioController.ts";
import { Rol } from "../Models/Rol.ts"; 


export function initializeData(userController: UsuarioController): void {
     userController.CrearUsuario("admin", "3123123", "admin", Rol.ADMIN_ROL);
     userController.CrearUsuario("user", "4535234", "user");
}