import { Router } from "express";
import {
  getEntradasUsuarioAgendas,
  getEntradasUsuarioAgendaCount,
  getEntradasUsuarioAgenda,
  saveEntradasUsuarioAgenda,
  deleteEntradasUsuarioAgenda,
  updateEntradasUsuarioAgenda,
} from "../controllers/entradasUsuarioAgenda";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: Entradas de Usuario para la Agenda
 *   description: Entradas de Usuario para la Agenda
 */

/**
 * @swagger
 *  /entradasUsuarioAgenda:
 *   get:
 *      summary: Obtiene todas las entradas de Usuario para la Agenda
 *      tags:    [ EntradasUsuarioAgenda ]
 */
// Nos va a ayudar a obtener todas las entradas de Usuario para la Agenda

/**
 * @swagger
 *  /entradasUsuarioAgenda:
 *   get:
 *      summary: Obtiene todas las entradas de Usuario para la Agenda
 *      tags:    [ EntradasUsuarioAgenda ]
 */
// Nos va a ayudar a obtener todas las entradas de Usuario para la Agenda

router.get("/entradasUsuarioAgenda", getEntradasUsuarioAgendas);
/**
 * @swagger
 *  /entradasUsuarioAgenda/count:
 *  get:
 *       summary: Obtiene el contador de entradasUsuarioAgenda
 *       tags:    [ EntradasUsuarioAgenda]
 */
//Esta ruta que va a servir para contar las entradasUsuarioAgenda
router.get("/entradasUsuarioAgenda/count", getEntradasUsuarioAgendaCount);
/**
 * @swagger
 *  /entradasUsuarioAgenda:
 *  get:
 *       summary: Obtiene una entrada de Usuario para la Agenda por el id
 *       tags:    [ EntradasUsuarioAgenda ]
 */
//Nos permite obtener una unica entrada de Usuariom para la Agenda siempre y cuando le pasemos un id
router.get("/entradasUsuarioAgenda/:id", getEntradasUsuarioAgenda);
/**
 * @swagger
 *  /entradasUsuarioAgenda:
 *  post:
 *       summary: Crea una nueva entrada de Usuario para la Agenda
 *       tags:    [ EntradasUsuarioAgenda ]
 */
// crear una entrada de Usuario para la Agenda
router.post("/entradasUsuarioAgenda", saveEntradasUsuarioAgenda);
/**
 * @swagger
 *  /entradasUsuarioAgenda:
 *  delete:
 *       summary: Elimina una entrada de Usuario para la Agenda por el id
 *       tags:    [ EntradasUsuarioAgenda ]
 */
// eliminar una entrada de Usuario para la Agenda asi que le pasamos el id
router.delete("/entradasUsuarioAgenda/:id", deleteEntradasUsuarioAgenda);
/**
 * @swagger
 *  /entradasUsuarioAgenda:
 *  put:
 *       summary: Actualiza una entrada de Usuario para la Agenda por el id
 *       tags:    [ EntradasUsuarioAgenda ]
 */
// actualizar una entrada de Usuario para la Agenda
router.put("/entradasUsuarioAgenda/:id", updateEntradasUsuarioAgenda);

export default router;
