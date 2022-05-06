import { Router } from "express";
import {
  getHoraSalidas,
  getHoraSalidaCount,
  getHoraSalida,
  saveHoraSalida,
  deleteHoraSalida,
  updateHoraSalida,
} from "../controllers/horaSalida";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Agenda
 *   description: Tareas agenda
 */

/**
 * @swagger
 *  /tasks:
 *   get:
 *      summary: Obtiene todas las tareas
 *      tags:    [ Agenda ]
 */
// Nos va a ayudar a obtener todas las tareas
router.get("/horaSalida", getHoraSalidas);
/**
 * @swagger
 *  /tasks/count:
 *  get:
 *       summary: Obtiene el contador de tareas
 *       tags:    [ Agenda ]
 */
//Esta ruta que va a servir para contar las tareas
router.get("/horaSalida/count", getHoraSalidaCount);
/**
 * @swagger
 *  /tasks:
 *  get:
 *       summary: Obtiene una tarea por el id
 *       tags:    [ Agenda ]
 */
//Nos permite obtener una unica tarea siempre y cuendo le pasemos un id
router.get("/horaSalida/:id", getHoraSalida);
/**
 * @swagger
 *  /tasks:
 *  post:
 *       summary: Crea una nueva tarea
 *       tags:    [ Agenda ]
 */
// crear una tarea
router.post("/horaSalida", saveHoraSalida);
/**
 * @swagger
 *  /tasks:
 *  delete:
 *       summary: Elimina una tarea por el id
 *       tags:    [ Agenda ]
 */
// eliminar una tarea asi que le pasamos el id
router.delete("/horaSalida/:id", deleteHoraSalida);
/**
 * @swagger
 *  /tasks:
 *  put:
 *       summary: Actualiza una tarea por el id
 *       tags:    [ Agenda ]
 */
// actualizar una tarea
router.put("/horaSalida/:id", updateHoraSalida);

export default router;
