import { Router } from "express";
import {
  getFestividades,
  getFestividadCount,
  getFestividad,
  saveFestividad,
  deleteFestividad,
  updateFestividad,
} from "../controllers/festividad";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Festividad
 *   description: Festividades
 */

/**
 * @swagger
 *  /festividad:
 *   get:
 *      summary: Obtiene todas las festividades
 *      tags:    [ Festividad ]
 */
// Nos va a ayudar a obtener todas las Festividades
router.get("/festividad", getFestividades);
/**
 * @swagger
 *  /festividad/count:
 *  get:
 *       summary: Obtiene el contador de festividad
 *       tags:    [ Festividad ]
 */
//Esta ruta que va a servir para contar las festividades
router.get("/festividad/count", getFestividadCount);
/**
 * @swagger
 *  /festividad:
 *  get:
 *       summary: Obtiene una festividad por el id
 *       tags:    [ Festividad ]
 */
//Nos permite obtener una unica festividad siempre y cuendo le pasemos un id
router.get("/festividad/:id", getFestividad);
/**
 * @swagger
 *  /festividad:
 *  post:
 *       summary: Crea una nueva festividad
 *       tags:    [ Festividad ]
 */
// crear una festividad
router.post("/festividad", saveFestividad);
/**
 * @swagger
 *  /festividad:
 *  delete:
 *       summary: Elimina una festividad por el id
 *       tags:    [ Festividad ]
 */
// eliminar una festividad asi que le pasamos el id
router.delete("/festividad/:id", deleteFestividad);
/**
 * @swagger
 *  /festividad:
 *  put:
 *       summary: Actualiza una festividad por el id
 *       tags:    [ Festividad ]
 */
// actualizar una festividad
router.put("/festividad/:id", updateFestividad);

export default router;
