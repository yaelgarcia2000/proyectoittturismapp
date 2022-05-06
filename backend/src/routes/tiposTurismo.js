import { Router } from "express";
import {
  getTiposTurismos,
  getTiposTurismoCount,
  getTiposTurismo,
  saveTiposTurismo,
  deleteTiposTurismo,
  updateTiposTurismo,
} from "../controllers/tiposTurismo";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: TiposTurismo
 *   description: Tipos de Turismo
 */

/**
 * @swagger
 *  /tiposTurismo:
 *   get:
 *      summary: Obtiene todas los tiposTurismo
 *      tags:    [ TiposTurismo ]
 */
// Nos va a ayudar a obtener todas los tiposTurismo
router.get("/tiposTurismo", getTiposTurismos);
/**
 * @swagger
 *  /tiposTurismo/count:
 *  get:
 *       summary: Obtiene el contador de tiposTurismo
 *       tags:    [ TiposTurismo ]
 */
//Esta ruta que va a servir para contar los tiposTurismo
router.get("/tiposTurismo/count", getTiposTurismoCount);
/**
 * @swagger
 *  /tiposTurismo:
 *  get:
 *       summary: Obtiene un tipoTurismo por el id
 *       tags:    [ TiposTurismo ]
 */
//Nos permite obtener un unico tiposTurismo siempre y cuendo le pasemos un id
router.get("/tiposTurismo/:id", getTiposTurismo);
/**
 * @swagger
 *  /tiposTurismo:
 *  post:
 *       summary: Crea un nuevo tiposTurismo
 *       tags:    [ TiposTurismo ]
 */
// crear un tiposTurismo
router.post("/tiposTurismo", saveTiposTurismo);
/**
 * @swagger
 *  /tiposTurismo:
 *  delete:
 *       summary: Elimina un tiposTurismo por el id
 *       tags:    [ TiposTurismo ]
 */
// eliminar un tiposTurismo asi que le pasamos el id
router.delete("/tiposTurismo/:id", deleteTiposTurismo);
/**
 * @swagger
 *  /tiposTurismo:
 *  put:
 *       summary: Actualiza un tiposTurismo por el id
 *       tags:    [ TiposTurismo ]
 */
// actualizar un tiposTurismo
router.put("/tiposTurismo/:id", updateTiposTurismo);

export default router;
