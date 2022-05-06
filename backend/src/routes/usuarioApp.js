import { Router } from "express";
import {
  getUsuarioApps,
  getUsuarioAppCount,
  getUsuarioApp,
  saveUsuarioApp,
  deleteUsuarioApp,
  updateUsuarioApp,
} from "../controllers/usuarioApp";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: UsuarioApp
 *   description: Usuario App
 */

/**
 * @swagger
 *  /usuarioApp:
 *   get:
 *      summary: Obtiene todos los usuarioApp
 *      tags:    [ UsuarioApp ]
 */
// Nos va a ayudar a obtener todos los usuarioApp
router.get("/usuarioApp", getUsuarioApps);
/**
 * @swagger
 *  /usuarioApp/count:
 *  get:
 *       summary: Obtiene el contador de usuarioApp
 *       tags:    [ UsuarioApp ]
 */
//Esta ruta va a servir para contar a los usuarioApp
router.get("/usuarioApp/count", getUsuarioAppCount);
/**
 * @swagger
 *  /usuarioApp:
 *  get:
 *       summary: Obtiene un usuarioApp por el id
 *       tags:    [ UsuarioApp ]
 */
//Nos permite obtener un unico usuarioApp siempre y cuendo le pasemos un id
router.get("/usuarioApp/:id", getUsuarioApp);
/**
 * @swagger
 *  /usuarioApp:
 *  post:
 *       summary: Crea un nuevo usuarioApp
 *       tags:    [ UsuarioApp ]
 */
// crear un usuarioApp
router.post("/usuarioApp", saveUsuarioApp);
/**
 * @swagger
 *  /usuarioApp:
 *  delete:
 *       summary: Elimina un usuarioApp por el id
 *       tags:    [ UsuarioApp ]
 */
// eliminar un usuarioApp asi que le pasamos el id
router.delete("/usuarioApp/:id", deleteUsuarioApp);
/**
 * @swagger
 *  /usuarioApp:
 *  put:
 *       summary: Actualiza un usuarioApp por el id
 *       tags:    [ UsuarioApp ]
 */
// actualizar un usuarioApp
router.put("/usuarioApp/:id", updateUsuarioApp);

export default router;
