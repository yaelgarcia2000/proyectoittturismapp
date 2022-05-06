import express from "express";
import cors from "cors";
import morgan from "morgan";
import swaggerJsdoc from "swagger-jsdoc";
//import swaggerUI from "swagger-ui-express"
import swaggerUiExpress from "swagger-ui-express";
import { options } from "./swaggerOptions";

const specs = swaggerJsdoc(options);

import administradorCiudadRoutes from "./routes/administradorCiudad";
import administradorEstablecimientoRoutes from "./routes/administradorEstablecimiento";
import calificacionesEstablecimientoUsuarioRoutes from "./routes/calificacionesEstablecimientoUsuario";
import calificacionesUsuariosCiudadesRoutes from "./routes/calificacionesUsuariosCiudades";
import ciudadesRoutes from "./routes/ciudades";
import direccionRoutes from "./routes/direccion";
import entradasUsuarioAgendaRoutes from "./routes/entradasUsuarioAgenda";
import establecimientoProRoutes from "./routes/establecimientoPro";
import establecimientosRoutes from "./routes/establecimientos";
import festividadRoutes from "./routes/festividad";
import fotosCiudadRoutes from "./routes/fotosCiudad";
import fotosEstablecimientoRoutes from "./routes/fotosEstablecimiento";
import horarioAtencionRoutes from "./routes/horarioAtencion";
import horaSalidaRoutes from "./routes/horaSalida";
import notasCiudadRoutes from "./routes/notasCiudad";
import origenTransporteRoutes from "./routes/origenTransporte";
import personajesImportantesRoutes from "./routes/personajesImportantes";
import platillosRoutes from "./routes/platillos";
import resenhasCiudadRoutes from "./routes/resenhasCiudad";
import resenhasEstablecimientoRoutes from "./routes/resenhasEstablecimiento";
import salidasTransporteRourtes from "./routes/salidasTransporte";
import tasksRoutes from "./routes/tasks";
import tiposTurismoRoutes from "./routes/tiposTurismo";
import tipoTurismoCiudadRoutes from "./routes/tipoTurismoCiudad";
import usuarioAppRoutes from "./routes/usuarioApp";
import zonasTuristicasRoutes from "./routes/zonasTuristicas";

import swaggerUI from "swagger-ui-express";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(administradorCiudadRoutes);
app.use(administradorEstablecimientoRoutes);
app.use(calificacionesEstablecimientoUsuarioRoutes);
app.use(calificacionesUsuariosCiudadesRoutes);
app.use(ciudadesRoutes);
app.use(direccionRoutes);
app.use(entradasUsuarioAgendaRoutes);
app.use(establecimientoProRoutes);
app.use(establecimientosRoutes);
app.use(festividadRoutes);
app.use(fotosCiudadRoutes);
app.use(fotosEstablecimientoRoutes);
app.use(horarioAtencionRoutes);
app.use(horaSalidaRoutes);
app.use(notasCiudadRoutes);
app.use(origenTransporteRoutes);
app.use(personajesImportantesRoutes);
app.use(platillosRoutes);
app.use(resenhasCiudadRoutes);
app.use(resenhasEstablecimientoRoutes);
app.use(salidasTransporteRourtes);
app.use(tasksRoutes);
app.use(tiposTurismoRoutes);
app.use(tipoTurismoCiudadRoutes);
app.use(usuarioAppRoutes);
app.use(zonasTuristicasRoutes);

app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

export default app;
