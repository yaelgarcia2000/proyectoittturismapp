import { Router } from "express";
import {
  getOrigenTransportes,
  getOrigenTransporteCount,
  getOrigenTransporte,
  saveOrigenTransporte,
  deleteOrigenTransporte,
  updateOrigenTransporte,
} from "../controllers/origenTransporte";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: OrigenDeTransporte
 *   description: Origen de Transporte
 */

/**
 * @swagger
 *  /origenTransporte:
 *   get:
 *      summary: Obtiene todos los origenTransporte
 *      tags:    [ OrigenTransporte ]
 */
// Nos va a ayudar a obtener todos los origenTransporte
router.get("/origenTransporte", getOrigenTransportes);
/**
 * @swagger
 *  /origenTransporte/count:
 *  get:
 *       summary: Obtiene el contador de origenTransporte
 *       tags:    [ OrigenTransporte ]
 */
//Esta ruta va a servir para contar los origenTransporte
router.get("/origenTransporte/count", getOrigenTransporteCount);
/**
 * @swagger
 *  /origenTransporte:
 *  get:
 *       summary: Obtiene un origenTransporte por el id
 *       tags:    [ OrigenTransporte ]
 */
//Nos permite obtener un unico origenTransporte siempre y cuendo le pasemos un id
router.get("/origenTransporte/:id", getOrigenTransporte);
/**
 * @swagger
 *  /origenTransporte:
 *  post:
 *       summary: Crea un nuevo origenTransporte
 *       tags:    [ OrigenTransporte ]
 */
// crear un origenTransporte
router.post("/origenTransporte", saveOrigenTransporte);
/**
 * @swagger
 *  /origenTransporte:
 *  delete:
 *       summary: Elimina un origenTransporte por el id
 *       tags:    [ OrigenTransporte ]
 */
// eliminar un origenTransporte asi que le pasamos el id
router.delete("/origenTransporte/:id", deleteOrigenTransporte);
/**
 * @swagger
 *  /origenTransporte:
 *  put:
 *       summary: Actualiza un origenTransporte por el id
 *       tags:    [ OrigenTransporte ]
 */
// actualizar un origenTransporte
router.put("/origenTransporte/:id", updateOrigenTransporte);

export default router;
