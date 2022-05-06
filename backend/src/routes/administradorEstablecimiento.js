import { Router } from "express";
import {
  getAdministradorEstablecimientos,
  getAdministradorEstablecimientoCount,
  getAdministradorEstablecimiento,
  saveAdministradorEstablecimiento,
  deleteAdministradorEstablecimientos,
  updateAdministradorEstablecimientos,
} from "../controllers/administradorEstablecimiento";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: AdministradorEstablecimiento
 *   description: Administrador de establecimiento
 */

/**
 * @swagger
 *  /administradorEstablecimiento:
 *   get:
 *      summary: Obtiene todos los administradores de establecimientos
 *      tags:    [ AdministradorDeEstablecimiento ]
 */
// Nos va a ayudar a obtener todos los administradores de establecimientos
router.get("/administradorEstablecimiento", getAdministradorEstablecimientos);
/**
 * @swagger
 *  /administradorEstablecimiento/count:
 *  get:
 *       summary: Obtiene el contador de administrador de establecimiento
 *       tags:    [AdministradorDeEstablecimiento ]
 */
//Esta ruta que va a servir para contar a los administradores de establecimientos
router.get(
  "/administradorEstablecimiento/count",
  getAdministradorEstablecimientoCount
);
/**
 * @swagger
 *  /administradorEstablecimiento:
 *  get:
 *       summary: Obtiene a un administrador de establecimiento por el id
 *       tags:    [ AdministradorDeEstablecimiento ]
 */
//Nos permite obtener a un administrador de establecimiento siempre y cuendo le pasemos un id
router.get(
  "/administradorEstablecimiento/:id",
  getAdministradorEstablecimiento
);
/**
 * @swagger
 *  /administradorEstablecimiento:
 *  post:
 *       summary: Crea a un nuevo administrador de establecimiento
 *       tags:    [ AdministradorDeEstablecimiento ]
 */
// crear un administrador de establecimiento
router.post("/administradorEstablecimiento", saveAdministradorEstablecimiento);
/**
 * @swagger
 *  /administradorEstablecimiento:
 *  delete:
 *       summary: Elimina a un administrador de establecimieto  por el id
 *       tags:    [ AdministradorDeEstablecimiento ]
 */
// Elimina a un administrador de establecimiento asi que le pasamos el id
router.delete(
  "/administradorEstablecimiento/:id",
  deleteAdministradorEstablecimientos
);
/**
 * @swagger
 *  /administradorEstablecimiento:
 *  put:
 *       summary: Actualiza a unadministrador de establecimiento por el id
 *       tags:    [ AdministradorDeEstablecimiento ]
 */
// Actualiza a un administrador de establecimiento
router.put(
  "/administradorEstablecimiento/:id",
  updateAdministradorEstablecimientos
);

export default router;
