import { Application, Router, Context } from "jsr:@oak/oak";
import { AppData } from "./Data/AppData.ts";
import { UsuarioController } from "./Controllers/UsuarioController.ts";
import { ReservaController } from "./Controllers/ReservaController.ts";
import { MesaController } from "./Controllers/MesaController.ts";
import { initializeData } from "./Data/defaultData.ts";

const data = new AppData();
const UserService = new UsuarioController(data);
const ReservaService = new ReservaController(data);
const MesaService = new MesaController(data);

initializeData(UserService);



const router = new Router();
router.get("/", (ctx: Context) => {
    ctx.response.body = "API BookEat v1.0";
});

// EndPoints de usuarios

router.get("/usuario", (ctx: Context) => {
  ctx.response.body = UserService.ObtenerUsuarios();
});

router.get("/usuario/:id", (ctx: Context) => {
  const id = parseInt(ctx.params.id)
  ctx.response.body = UserService.ObtenerUsuario(id);
});

router.post("/usuarioCrear", async (ctx: Context) => {
  const body =  await ctx.request.body;
  //UserService.CrearUsuario(nombre, telefono, contraseña);
  ctx.response.body = { message: ctx };
});


const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });