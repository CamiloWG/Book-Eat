import type { Rol } from "../Models/Rol.ts";


export interface Usuario {
    id: number,
    nombre: string,
    telefono: string,
    contraseña: string,
    rol: Rol,
    reservasIds: number[]
}