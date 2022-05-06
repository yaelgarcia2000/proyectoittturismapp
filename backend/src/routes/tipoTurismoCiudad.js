import { Router } from "express";
import {
  getTipoTurismoCiudades,
  getTipoTurismoCiudadCount,
  getTipoTurismoCiudad,
  saveTipoTurismoCiudad,
  deleteTipoTurismoCiudad,
  updateTipoTurismoCiudad,
} from "../controllers/tipoTurismoCiudad";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: TipoTurismoCiudad
 *   description: Tipo de Turismo en la Ciudad
 */

/**
 * @swagger
 *  /tipoTurismoCiudad:
 *   get:
 *      summary: Obtiene todas los tipoTurismoCiudad
 *      tags:    [ TipoTurismoCiudad ]
 */
// Nos va a ayudar a obtener todos los tipoTurismoCiudad
router.get("/tipoTurismoCiudad", getTipoTurismoCiudades);
/**
 * @swagger
 *  /tipoTurismoCiudad/count:
 *  get:
 *       summary: Obtiene el contador de tipoTurismoCiudad
 *       tags:    [ TipoTurismoCiudad]
 */
//Esta ruta va a servir para contar los tipoTurismoCiudad
router.get("/tipoTurismoCiudad/count", getTipoTurismoCiudadCount);
/**
 * @swagger
 *  /tipoTurismoCiudad:
 *  get:
 *       summary: Obtiene un tipoTurismoCiudad por el id
 *       tags:    [ TipoTurismoCiudad ]
 */
//Nos permite obtener un unico tipoTurismoCiudad siempre y cuando le pasemos un id
router.get("/tipoTurismoCiudad/:id", getTipoTurismoCiudad);
/**
 * @swagger
 *  /tipoTurismoCiudad:
 *  post:
 *       summary: Crea un nuevo tipoTurismoCiudad
 *       tags:    [ TipoTurismoCiudad ]
 */
// crear un tipoTurismoCiudad
router.post("/tipoTurismoCiudad", saveTipoTurismoCiudad);
/**
 * @swagger
 *  /tipoTurismoCiudad:
 *  delete:
 *       summary: Elimina un tipoTurismoCiudad por el id
 *       tags:    [ TipoTurismoCiudad ]
 */
// elimina un tipoTurismoCiudad asi que le pasamos el id
router.delete("/tipoTurismoCiudad/:id", deleteTipoTurismoCiudad);
/**
 * @swagger
 *  /tipoTurismoCiudad:
 *  put:
 *       summary: Actualiza un tipoTurismoCiudad por el id
 *       tags:    [ TipoTurismoCiudad ]
 */
// actualizar un tipoTurismoCiudad
router.put("/tipoTurismoCiudad/:id", updateTipoTurismoCiudad);

export default router;
