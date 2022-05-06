import { Router } from "express";
import {
  getHorarioAtenciones,
  getHorarioAtencionCount,
  getHorarioAtencion,
  saveHorarioAtencion,
  deleteHorarioAtencion,
  updateHorarioAtencion,
} from "../controllers/horarioAtencion";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: HorarioAtencion
 *   description: Horarios de Atencion
 */

/**
 * @swagger
 *  /horarioAtencion:
 *   get:
 *      summary: Obtiene todos los horarioAtencion
 *      tags:    [ HorarioAtencion ]
 */
// Nos va a ayudar a obtener todos los HorarioAtencion
router.get("/horarioAtencion", getHorarioAtenciones);
/**
 * @swagger
 *  /horarioAtencion/count:
 *  get:
 *       summary: Obtiene el contador de horarioAtencion
 *       tags:    [ HorarioAtencion ]
 */
//Esta ruta va a servir para contar los horarioAtencion
router.get("/horarioAtencion/count", getHorarioAtencionCount);
/**
 * @swagger
 *  /horarioAtencion:
 *  get:
 *       summary: Obtiene un horarioAtencion por el id
 *       tags:    [ HorarioAtencion ]
 */
//Nos permite obtener un unico horarioAtencion siempre y cuendo le pasemos un id
router.get("/horarioAtencion/:id", getHorarioAtencion);
/**
 * @swagger
 *  /horarioAtencion:
 *  post:
 *       summary: Crea un nuevo horarioAtencion
 *       tags:    [ HorarioAtencion ]
 */
// crear un horarioAtencion
router.post("/horarioAtencion", saveHorarioAtencion);
/**
 * @swagger
 *  /horarioAtencion:
 *  delete:
 *       summary: Elimina un horarioAtencion por el id
 *       tags:    [ HorarioAtencion ]
 */
// eliminar un horarioAtencion asi que le pasamos el id
router.delete("/horarioAtencion/:id", deleteHorarioAtencion);
/**
 * @swagger
 *  /horarioAtencion:
 *  put:
 *       summary: Actualiza un horarioAtencion por el id
 *       tags:    [ HorarioAtencion ]
 */
// actualizar un horarioAtencion
router.put("/horarioAtencion/:id", updateHorarioAtencion);

export default router;
