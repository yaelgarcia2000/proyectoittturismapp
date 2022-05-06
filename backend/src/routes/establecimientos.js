import { Router } from "express";
import {
  getEstablecimientoss,
  getEstablecimientosCount,
  getEstablecimientos,
  saveEstablecimientos,
  deleteEstablecimientos,
  updateEstablecimientos,
} from "../controllers/establecimientos";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Establecimientos
 *   description: Establecimientos
 */

/**
 * @swagger
 *  /establecimientos:
 *   get:
 *      summary: Obtiene todos los establecimientos
 *      tags:    [ Establecimientos ]
 */
// Nos va a ayudar a obtener todos los establecimientos
router.get("/establecimientos", getEstablecimientoss);
/**
 * @swagger
 *  /establecimientos/count:
 *  get:
 *       summary: Obtiene el contador de los establecimientos
 *       tags:    [ Establecimientos ]
 */
//Esta ruta que va a servir para contar los establecimientos
router.get("/establecimientos/count", getEstablecimientosCount);
/**
 * @swagger
 *  /establecimientos:
 *  get:
 *       summary: Obtiene un establecimiento por el id
 *       tags:    [ Establecimientos ]
 */
//Nos permite obtener un unico establecimiento siempre y cuendo le pasemos un id
router.get("/establecimientos/:id", getEstablecimientos);
/**
 * @swagger
 *  /establecimientos:
 *  post:
 *       summary: Crea un nuevo establecimiento
 *       tags:    [ Establecimientos ]
 */
// crear un establecimiento
router.post("/establecimientos", saveEstablecimientos);
/**
 * @swagger
 *  /establecimientos:
 *  delete:
 *       summary: Elimina un establecimiento por el id
 *       tags:    [ Establecimientos ]
 */
// eliminar un establecimiento asi que le pasamos el id
router.delete("/establecimientos/:id", deleteEstablecimientos);
/**
 * @swagger
 *  /establecimientos:
 *  put:
 *       summary: Actualiza un establecimiento por el id
 *       tags:    [ Establecimientos ]
 */
// actualizar un establecimiento
router.put("/establecimientos/:id", updateEstablecimientos);

export default router;
