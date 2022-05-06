import { Router } from "express";
import {
  getZonasTuristicass,
  getZonasTuristicasCount,
  getZonasTuristicas,
  saveZonasTuristicas,
  deleteZonasTuristicas,
  updateZonasTuristicas,
} from "../controllers/zonasTuristicas";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: ZonasTuristicas
 *   description: Zonas Turisticas
 */

/**
 * @swagger
 *  /zonasTuristicas:
 *   get:
 *      summary: Obtiene todas las zonasTuristicas
 *      tags:    [ ZonasTuristicas ]
 */
// Nos va a ayudar a obtener todas las zonasTuristicas
router.get("/zonasTuristicas", getZonasTuristicass);
/**
 * @swagger
 *  /zonasTuristicas/count:
 *  get:
 *       summary: Obtiene el contador de las zonasTuristicas
 *       tags:    [ ZonasTuristicas ]
 */
//Esta ruta que va a servir para contar las zonasTuristicas
router.get("/zonasTuristicas/count", getZonasTuristicasCount);
/**
 * @swagger
 *  /zonasTuristicas:
 *  get:
 *       summary: Obtiene una zonasTuristica por el id
 *       tags:    [ ZonasTuristicas ]
 */
//Nos permite obtener una unica zonasTuristica siempre y cuendo le pasemos un id
router.get("/zonasTuristicas/:id", getZonasTuristicas);
/**
 * @swagger
 *  /zonasTuristicas:
 *  post:
 *       summary: Crea una nueva zonasTuristicas
 *       tags:    [ ZonasTuristicas ]
 */
// crear una zonaTuristica
router.post("/zonasTuristicas", saveZonasTuristicas);
/**
 * @swagger
 *  /zonasTuristicas:
 *  delete:
 *       summary: Elimina una zonaTuristica por el id
 *       tags:    [ ZonasTuristicas ]
 */
// eliminar una zonaTuristica asi que le pasamos el id
router.delete("/zonasTuristicas/:id", deleteZonasTuristicas);
/**
 * @swagger
 *  /zonasTuristicas:
 *  put:
 *       summary: Actualiza una zonasTuristica por el id
 *       tags:    [ ZonasTuristicas ]
 */
// actualizar una zonaTuristica
router.put("/zonasTuristicas/:id", updateZonasTuristicas);

export default router;
