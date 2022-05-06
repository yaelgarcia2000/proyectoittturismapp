import { Router } from "express";
import {
  getResenhasEstablecimientos,
  getResenhasEstablecimientoCount,
  getResenhasEstablecimiento,
  saveResenhasEstablecimiento,
  deleteResenhasEstablecimiento,
  updateResenhasEstablecimiento,
} from "../controllers/resenhasEstablecimiento";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: ReseñasEstablecimientos
 *   description: Reseñas de Establecimientos
 */

/**
 * @swagger
 *  /resenhasEstablecimiento:
 *   get:
 *      summary: Obtiene todas las resenhasEstablecimiento
 *      tags:    [ ResenhasEstablecimiento ]
 */
// Nos va a ayudar a obtener todas las resenhasEstablecimiento
router.get("/resenhasEstablecimiento", getResenhasEstablecimientos);
/**
 * @swagger
 *  /resenhasEstablecimiento/count:
 *  get:
 *       summary: Obtiene el contador de resenhasEstablecimiento
 *       tags:    [ ResenhasEstablecimiento ]
 */
//Esta ruta que va a servir para contar las resenhasEstablecimiento
router.get("/resenhasEstablecimiento/count", getResenhasEstablecimientoCount);
/**
 * @swagger
 *  /resenhasEstablecimiento:
 *  get:
 *       summary: Obtiene una resenhasEstablecimiento por el id
 *       tags:    [ ResenhasEstablecimiento ]
 */
//Nos permite obtener una unica resenhasEstablecimiento siempre y cuendo le pasemos un id
router.get("/resenhasEstablecimiento/:id", getResenhasEstablecimiento);
/**
 * @swagger
 *  /resenhasEstablecimiento:
 *  post:
 *       summary: Crea una nueva resenhasEstablecimiento
 *       tags:    [ ResenhasEstablecimiento ]
 */
// crear una resenhasEstablecimiento
router.post("/resenhasEstablecimiento", saveResenhasEstablecimiento);
/**
 * @swagger
 *  /resenhasEstablecimiento:
 *  delete:
 *       summary: Elimina una resenhasEstablecimiento por el id
 *       tags:    [ ResenhasEstablecimiento ]
 */
// eliminar una resenhasEstablecimiento asi que le pasamos el id
router.delete("/resenhasEstablecimiento/:id", deleteResenhasEstablecimiento);
/**
 * @swagger
 *  /resenhasEstablecimiento:
 *  put:
 *       summary: Actualiza una resenhasEstablecimiento por el id
 *       tags:    [ ResenhasEstablecimiento ]
 */
// actualizar una resenhasEstablecimiento
router.put("/resenhasEstablecimiento/:id", updateResenhasEstablecimiento);

export default router;
