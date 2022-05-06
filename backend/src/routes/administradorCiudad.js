import { Router } from "express";
import {
  getAdministradorCiudades,
  getAdministradorCiudadCount,
  getAdministradorCiudad,
  saveAdministradorCiudad,
  deleteAdministradorCiudades,
  updateAdministradorCiudades,
} from "../controllers/administradorCiudad";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: administradorCiudad
 *   description: administradorCiudad
 */

/**
 * @swagger
 *  /administradorCiudad:
 *   get:
 *      summary: Obtiene a todos los administradores de ciudad
 *      tags:    [ Administradir_de_Cuidad ]
 */
// Nos va a ayudar a obtener a todos los administradores de ciudad
router.get("/administradorCiudad", getAdministradorCiudades);
/**
 * @swagger
 *  /administradorCiudad/count:
 *  get:
 *       summary: Obtiene el contador de administrador de cuidad
 *       tags:    [ Administradir_de_Cuidad ]
 */
//Esta ruta que va a servir para contar los administradores de cuidad
router.get("/administradorCiudad/count", getAdministradorCiudadCount);
/**
 * @swagger
 *  /administradorCiudad:
 *  get:
 *       summary: Obtiene un administrador de cuidad por el id
 *       tags:    [ Administradir_de_Cuidad ]
 */
//Nos permite obtener a un unico administrador de cuidad siempre y cuendo le pasemos un id
router.get("/administradorCiudad/:id", getAdministradorCiudad);
/**
 * @swagger
 *  /administradorCiudad:
 *  post:
 *       summary: Crea a un nuevo administrador de ciudad
 *       tags:    [ Administradir_de_Cuidad ]
 */
// crear a un nuevo administrador de cuidad
router.post("/administradorCiudad", saveAdministradorCiudad);
/**
 * @swagger
 *  /administradorCiudad:
 *  delete:
 *       summary: Elimina a un administrador de cuidad por el id
 *       tags:    [ Administradir_de_Cuidad ]
 */
// Eliminar a un administrador de cuidad asi que le pasamos el id
router.delete("/administradorCiudad/:id", deleteAdministradorCiudades);
/**
 * @swagger
 *  /administradorCiudad:
 *  put:
 *       summary: Actualiza al administrador de cuidad por el id
 *       tags:    [ Administradir_de_Cuidad ]
 */
// actualizar a un administrador de cuidad
router.put("/administradorCiudad/:id", updateAdministradorCiudades);

export default router;
