import { Router } from "express";
import { getServiceTransport } from "../controllers/serviceTransport";

const router = Router();

router.get("/serviceTransport", getServiceTransport);
export default router;