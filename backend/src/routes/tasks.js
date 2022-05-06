import { Router } from "express";
import {
  getTasks,
  getTaskCount,
  getTask,
  saveTask,
  deleteTasks,
  updateTasks,
} from "../controllers/tasks";

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
router.get("/tasks", getTasks);
/**
 * @swagger
 *  /tasks/count:
 *  get:
 *       summary: Obtiene el contador de tareas
 *       tags:    [ Agenda ]
 */
//Esta ruta que va a servir para contar las tareas
router.get("/tasks/count", getTaskCount);
/**
 * @swagger
 *  /tasks:
 *  get:
 *       summary: Obtiene una tarea por el id
 *       tags:    [ Agenda ]
 */
//Nos permite obtener una unica tarea siempre y cuendo le pasemos un id
router.get("/tasks/:id", getTask);
/**
 * @swagger
 *  /tasks:
 *  post:
 *       summary: Crea una nueva tarea
 *       tags:    [ Agenda ]
 */
// crear una tarea
router.post("/tasks", saveTask);
/**
 * @swagger
 *  /tasks:
 *  delete:
 *       summary: Elimina una tarea por el id
 *       tags:    [ Agenda ]
 */
// eliminar una tarea asi que le pasamos el id
router.delete("/tasks/:id", deleteTasks);
/**
 * @swagger
 *  /tasks:
 *  put:
 *       summary: Actualiza una tarea por el id
 *       tags:    [ Agenda ]
 */
// actualizar una tarea
router.put("/tasks/:id", updateTasks);

export default router;
