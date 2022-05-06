import { Router } from "express";
import {
  getNotasCiudades,
  getNotasCiudadCount,
  getNotasCiudad,
  saveNotasCiudad,
  deleteNotasCiudad,
  updateNotasCiudad,
} from "../controllers/notasCiudad";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: NotasCiudad
 *   description: Notas de la Ciudad
 */

/**
 * @swagger
 *  /notasCiudad:
 *   get:
 *      summary: Obtiene todas las notasCiudad
 *      tags:    [ NotasCiudad ]
 */
// Nos va a ayudar a obtener todas las notasCiudad
router.get("/notasCiudad", getNotasCiudades);
/**
 * @swagger
 *  /notasCiudad/count:
 *  get:
 *       summary: Obtiene el contador de notasCiudad
 *       tags:    [ NotasCiudad ]
 */
//Esta ruta que va a servir para contar las notasCiudad
router.get("/notasCiudad/count", getNotasCiudadCount);
/**
 * @swagger
 *  /notasCiudad:
 *  get:
 *       summary: Obtiene una notasCiudad por el id
 *       tags:    [ NotasCiudad ]
 */
//Nos permite obtener una unica notasCiudad siempre y cuendo le pasemos un id
router.get("/notasCiudad/:id", getNotasCiudad);
/**
 * @swagger
 *  /notasCiudad:
 *  post:
 *       summary: Crea una nueva notasCiudad
 *       tags:    [ NotasCiudad ]
 */
// crear una notasCiudad
router.post("/notasCiudad", saveNotasCiudad);
/**
 * @swagger
 *  /notasCiudad:
 *  delete:
 *       summary: Elimina una notasCiudad por el id
 *       tags:    [ NotasCiudad ]
 */
// eliminar una notasCiudad asi que le pasamos el id
router.delete("/notasCiudad/:id", deleteNotasCiudad);
/**
 * @swagger
 *  /notasCiudad:
 *  put:
 *       summary: Actualiza una notasCiudad por el id
 *       tags:    [ NotasCiudad ]
 */
// actualizar una notasCiudad
router.put("/notasCiudad/:id", updateNotasCiudad);


export default router;