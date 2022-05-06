import { Router } from "express";
import {
  getSalidasTransportes,
  getSalidasTransporteCount,
  getSalidasTransporte,
  saveSalidasTransporte,
  deleteSalidasTransporte,
  updateSalidasTransporte,
} from "../controllers/salidasTransporte";

const router = Router();

/**
 * @swagger
 *  tags:
 *   name: SalidasTransporte
 *   description: Salidas de Transportes
 */

/**
 * @swagger
 *  /salidasTransporte:
 *   get:
 *      summary: Obtiene todas las salidas de Transporte
 *      tags:    [ SalidasTransporte ]
 */
// Nos va a ayudar a obtener todas las salidasTransporte
router.get("/salidasTransporte", getSalidasTransportes);
/**
 * @swagger
 *  /salidasTransporte/count:
 *  get:
 *       summary: Obtiene el contador de salidasTransporte
 *       tags:    [ SalidasTransporte ]
 */
//Esta ruta que va a servir para contar las salidasTransporte
router.get("/salidasTransporte/count", getSalidasTransporteCount);
/**
 * @swagger
 *  /salidasTransporte:
 *  get:
 *       summary: Obtiene una salidasTransporte por el id
 *       tags:    [ SalidasTransporte ]
 */
//Nos permite obtener una unica salidasTransporte siempre y cuendo le pasemos un id
router.get("/salidasTransporte/:id", getSalidasTransporte);
/**
 * @swagger
 *  /salidasTransporte:
 *  post:
 *       summary: Crea una nueva salidasTransporte
 *       tags:    [ SalidasTransporte ]
 */
// crear una salidasTransporte
router.post("/salidasTransporte", saveSalidasTransporte);
/**
 * @swagger
 *  /salidasTransporte:
 *  delete:
 *       summary: Elimina una salidasTransporte por el id
 *       tags:    [ SalidasTransporte ]
 */
// eliminar una salidasTransporte asi que le pasamos el id
router.delete("/salidasTransporte/:id", deleteSalidasTransporte);
/**
 * @swagger
 *  /salidasTransporte:
 *  put:
 *       summary: Actualiza una salidasTransporte por el id
 *       tags:    [ SalidasTransporte ]
 */
// actualizar una salidasTransporte
router.put("/salidasTransporte/:id", updateSalidasTransporte);

export default router;
