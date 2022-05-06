import { Router } from "express";
import {
  getPlatilloss,
  getPlatillosCount,
  getPlatillos,
  savePlatillos,
  deletePlatillos,
  updatePlatillos,
} from "../controllers/platillos";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Platillos
 *   description: Platillos
 */

/**
 * @swagger
 *  /platillos:
 *   get:
 *      summary: Obtiene todos los platillos
 *      tags:    [ Platillos ]
 */
// Nos va a ayudar a obtener todos los platillos
router.get("/platillos", getPlatilloss);
/**
 * @swagger
 *  /platillos/count:
 *  get:
 *       summary: Obtiene el contador de platillos
 *       tags:    [ Platillos ]
 */
//Esta ruta que va a servir para contar los platillos
router.get("/platillos/count", getPlatillosCount);
/**
 * @swagger
 *  /platillos:
 *  get:
 *       summary: Obtiene un platillo por el id
 *       tags:    [ Platillos ]
 */
//Nos permite obtener un unico platillo siempre y cuendo le pasemos un id
router.get("/platillos/:id", getPlatillos);
/**
 * @swagger
 *  /platillos:
 *  post:
 *       summary: Crea un nuevo platillo
 *       tags:    [ Platillo ]
 */
// crear un platillo
router.post("/platillos", savePlatillos);
/**
 * @swagger
 *  /platillos:
 *  delete:
 *       summary: Elimina un platillo por el id
 *       tags:    [ Platillos ]
 */
// eliminar un platillo asi que le pasamos el id
router.delete("/platillos/:id", deletePlatillos);
/**
 * @swagger
 *  /platillos:
 *  put:
 *       summary: Actualiza un platillo por el id
 *       tags:    [ Platillos ]
 */
// actualizar un platillo
router.put("/platillos/:id", updatePlatillos);

export default router;
