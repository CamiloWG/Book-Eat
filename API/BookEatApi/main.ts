import { Application, Router, Context } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
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

router.post("/usuario", async (ctx: Context) => {
  if (!ctx.request.hasBody) {
    ctx.response.status = 400;
    ctx.response.body = { error: "El cuerpo de la solicitud está vacío o no se envió correctamente" };
    return;
  }

  const body = await ctx.request.body().value;
  const { nombre, telefono, contraseña } = body;
  
  UserService.CrearUsuario(nombre, telefono, contraseña);
  ctx.response.body = { message: "Usuario creado exitosamente!", code: 200};
});


router.post("/login", async (ctx: Context) => {
  if (!ctx.request.hasBody) {
    ctx.response.status = 400;
    ctx.response.body = { error: "El cuerpo de la solicitud está vacío o no se envió correctamente" };
    return;
  }

  const { nombre, contraseña } = await ctx.request.body().value;
  const user = UserService.ObtenerUsuarioPorNombre(nombre);
  
  if(user) {
    if(user.contraseña == contraseña) {
      ctx.response.body = { logeado: true, code: 200};
      return;
    } else {
      ctx.response.status = 513;
      ctx.response.body = { logeado: false, code: 500, message: "Contraseña incorrecta"};
    }
  } else {
    ctx.response.status = 513;
    ctx.response.body = { logeado: false, code: 500, message: "El usuario no existe"};
  }

  
});


const app = new Application();

app.use(oakCors({
  origin: "*" 
}));
 
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });