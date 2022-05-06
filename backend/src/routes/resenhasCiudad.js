import { Router } from "express";
import {
  getResenhasCiudades,
  getResenhasCiudadCount,
  getResenhasCiudad,
  saveResenhasCiudad,
  deleteResenhasCiudad,
  updateResenhasCiudad,
} from "../controllers/resenhasCiudad";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: ReseñasCiudad
 *   description: Reseñas de la Ciudad
 */

/**
 * @swagger
 *  /resenhasCiudad:
 *   get:
 *      summary: Obtiene todas las resenhasCiudad
 *      tags:    [ ResenhasCiudad ]
 */
// Nos va a ayudar a obtener todas las resenhasCiudad
router.get("/resenhasCiudad", getResenhasCiudades);
/**
 * @swagger
 *  /resenhasCiudad/count:
 *  get:
 *       summary: Obtiene el contador de resenhasCiudad
 *       tags:    [ ResenhasCiudad ]
 */
//Esta ruta va a servir para contar las resenhasCiudad
router.get("/resenhasCiudad/count", getResenhasCiudadCount);
/**
 * @swagger
 *  /resenhasCiudad:
 *  get:
 *       summary: Obtiene una resenhasCiudad por el id
 *       tags:    [ ResenhasCiudad ]
 */
//Nos permite obtener una unica resenhasCiudad siempre y cuendo le pasemos un id
router.get("/resenhasCiudad/:id", getResenhasCiudad);
/**
 * @swagger
 *  /resenhasCiudad:
 *  post:
 *       summary: Crea una nueva resenhasCiudad
 *       tags:    [ ResenhasCiudad ]
 */
// crear una resenhasCiudad
router.post("/resenhasCiudad", saveResenhasCiudad);
/**
 * @swagger
 *  /resenhasCiudad:
 *  delete:
 *       summary: Elimina una resenhasCiudad por el id
 *       tags:    [ ResenhasCiudad ]
 */
// eliminar una resenhasCiudad asi que le pasamos el id
router.delete("/resenhasCiudad/:id", deleteResenhasCiudad);
/**
 * @swagger
 *  /resenhasCiudad:
 *  put:
 *       summary: Actualiza una resenhasCiudad por el id
 *       tags:    [ ResenhasCiudad ]
 */
// actualizar una resenhasCiudad
router.put("/resenhasCiudad/:id", updateResenhasCiudad);

export default router;