import { Router } from "express";
import {
  getPersonajesImportantess,
  getPersonajesImportantesCount,
  getPersonajesImportantes,
  savePersonajesImportantes,
  deletePersonajesImportantes,
  updatePersonajesImportantes,
} from "../controllers/personajesImportantes";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: PersonajesImportantes
 *   description: Personajes Importantes
 */

/**
 * @swagger
 *  /personajesImportantes:
 *   get:
 *      summary: Obtiene a todos los personajesImportantes
 *      tags:    [ PersonajesImportantes ]
 */
// Nos va a ayudar a obtener todos los personajesImportantes
router.get("/personajesImportantes", getPersonajesImportantess);
/**
 * @swagger
 *  /personajesImportantes/count:
 *  get:
 *       summary: Obtiene el contador de personajesImportantes
 *       tags:    [ PersonajesImportantes ]
 */
//Esta ruta que va a servir para contar a los personajesImportantes
router.get("/personajesImportantes/count", getPersonajesImportantesCount);
/**
 * @swagger
 *  /personajesImportantes:
 *  get:
 *       summary: Obtiene un personajesImportantes por el id
 *       tags:    [ PersonajesImportantes ]
 */
//Nos permite obtener un personajesImportante siempre y cuendo le pasemos un id
router.get("/personajesImportantes/:id", getPersonajesImportantes);
/**
 * @swagger
 *  /personajesImportantes:
 *  post:
 *       summary: Crea a un nuevo personaje Importante
 *       tags:    [ PersonajesImportantes ]
 */
// crear a un personaje Importante
router.post("/personajesImportantes", savePersonajesImportantes);
/**
 * @swagger
 *  /personajesImportantes:
 *  delete:
 *       summary: Elimina a un personaje Importante por el id
 *       tags:    [ PersonajesImportantes ]
 */
// eliminar a un personaje Importante asi que le pasamos el id
router.delete("/personajesImportantes/:id", deletePersonajesImportantes);
/**
 * @swagger
 *  /personajesImportantes:
 *  put:
 *       summary: Actualiza a un personaje Importante por el id
 *       tags:    [ PersonajesImportantes ]
 */
// actualizar a un Personaje Importantes
router.put("/personajesImportantes/:id", updatePersonajesImportantes);

export default router;