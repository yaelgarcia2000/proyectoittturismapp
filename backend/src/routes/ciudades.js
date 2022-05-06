import { Router } from "express";
import {
  getCiudades,
  getTaskCiudadesCount,
  getCiudad,
  saveCiudad,
  deleteCiudades,
  updateCiudades,
} from "../controllers/ciudades";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Ciudades
 *   description: Ciudades
 */

/**
 * @swagger
 *  /ciudades:
 *   get:
 *      summary: Obtiene todas las ciudades
 *      tags:    [ Ciudades ]
 */
// Nos va a ayudar a obtener todas las ciudades
router.get("/ciudades", getCiudades);
/**
 * @swagger
 *  /ciudades/count:
 *  get:
 *       summary: Obtiene el contador de ciudades
 *       tags:    [ Ciudades ]
 */
//Esta ruta que va a servir para contar las ciudades
router.get("/ciudades/count", getTaskCiudadesCount);
/**
 * @swagger
 *  /ciudades:
 *  get:
 *       summary: Obtiene una ciudad por el id
 *       tags:    [ Ciudades ]
 */
//Nos permite obtener una unica ciudad siempre y cuendo le pasemos un id
router.get("/ciudades/:id", getCiudad);
/**
 * @swagger
 *  /ciudades:
 *  post:
 *       summary: Crea una nueva ciudad
 *       tags:    [ Ciudades ]
 */
// crear una ciudad
router.post("/ciudades", saveCiudad);
/**
 * @swagger
 *  /ciudades:
 *  delete:
 *       summary: Elimina una ciudad por el id
 *       tags:    [ Ciudades ]
 */
// eliminar una ciudad asi que le pasamos el id
router.delete("/ciudades/:id", deleteCiudades);
/**
 * @swagger
 *  /ciudades:
 *  put:
 *       summary: Actualiza una ciudad por el id
 *       tags:    [ Ciudades ]
 */
// actualizar una cuidad
router.put("/ciudades/:id", updateCiudades);

export default router;
