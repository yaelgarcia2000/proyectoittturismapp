import { Router } from "express";
import {
  getEstablecimientoPros,
  getEstablecimientoProCount,
  getEstablecimientoPro,
  saveEstablecimientoPro,
  deleteEstablecimientoPro,
  updateEstablecimientoPro,
} from "../controllers/establecimientoPro";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: EstablecimientoPro
 *   description: EstablecimientoPro
 */

/**
 * @swagger
 *  /establecimientoPro:
 *   get:
 *      summary: Obtiene todos los Establecimientos Pro
 *      tags:    [ EstablecimientoPro ]
 */
// Nos va a ayudar a obtener todos los Establecimientos Pro
router.get("/establecimientoPro", getEstablecimientoPros);
/**
 * @swagger
 *  /establecimientoPro/count:
 *  get:
 *       summary: Obtiene el contador de EstablecimientoPro
 *       tags:    [ EstablecimientoPro ]
 */
//Esta ruta que va a servir para contar todos los EstablecimientoPro
router.get("/establecimientoPro/count", getEstablecimientoProCount);
/**
 * @swagger
 *  /establecimientoPro:
 *  get:
 *       summary: Obtiene un EstablecimientoPro por el id
 *       tags:    [ EstablecimientoPro ]
 */
//Nos permite obtener un unico EstablecimientoPro siempre y cuendo le pasemos un id
router.get("/establecimientoPro/:id", getEstablecimientoPro);
/**
 * @swagger
 *  /establecimientoPro:
 *  post:
 *       summary: Crea un nuevo EstablecimientoPro
 *       tags:    [ EstablecimientoPro ]
 */
// crear un EstablecimientoPro
router.post("/establecimientoPro", saveEstablecimientoPro);
/**
 * @swagger
 *  /establecimientoPro:
 *  delete:
 *       summary: Elimina un EstablecimientoPro por el id
 *       tags:    [ EstablecimientoPro ]
 */
// eliminar un EstablecimientoPro asi que le pasamos el id
router.delete("/establecimientoPro/:id", deleteEstablecimientoPro);
/**
 * @swagger
 *  /establecimientoPro:
 *  put:
 *       summary: Actualiza un EstablecimientoPro por el id
 *       tags:    [ EstablecimientoPro ]
 */
// actualizar un EstablecimientoPro
router.put("/establecimientoPro/:id", updateEstablecimientoPro);

export default router;
