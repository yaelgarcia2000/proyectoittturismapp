import { Router } from "express";
import {
  getDirecciones,
  getDireccionCount,
  getDireccion,
  saveDireccion,
  deleteDireccion,
  updateDireccion,
} from "../controllers/direccion";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Direccion
 *   description: Direcciones
 */

/**
 * @swagger
 *  /direccion:
 *   get:
 *      summary: Obtiene todas las direcciones
 *      tags:    [ Agenda ]
 */
// Nos va a ayudar a obtener todas las direcciones
router.get("/direccion", getDirecciones);
/**
 * @swagger
 *  /direccion/count:
 *  get:
 *       summary: Obtiene el contador de direcciones
 *       tags:    [ Direccion ]
 */
//Esta ruta va a servir para contar las direcciones
router.get("/direccion/count", getDireccionCount);
/**
 * @swagger
 *  /direccion:
 *  get:
 *       summary: Obtiene una direccion por el id
 *       tags:    [ Direccion ]
 */
//Nos permite obtener una unica direccion siempre y cuendo le pasemos un id
router.get("/direccion/:id", getDireccion);
/**
 * @swagger
 *  /direccion:
 *  post:
 *       summary: Crea una nueva direccion
 *       tags:    [ Direccion ]
 */
// crear una direccion
router.post("/direccion", saveDireccion);
/**
 * @swagger
 *  /direccion:
 *  delete:
 *       summary: Elimina una direccion por el id
 *       tags:    [ Direccion ]
 */
// eliminar una direccion asi que le pasamos el id
router.delete("/direccion/:id", deleteDireccion);
/**
 * @swagger
 *  /direccion:
 *  put:
 *       summary: Actualiza una direccion por el id
 *       tags:    [ Direccion ]
 */
// actualizar una direccion
router.put("/direccion/:id", updateDireccion);

export default router;
