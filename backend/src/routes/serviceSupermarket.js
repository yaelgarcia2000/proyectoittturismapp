import { Router } from "express";
import { getServiceSupermarket } from "../controllers/serviceSupermarket";

const router = Router();

router.get("/serviceSupermarket", getServiceSupermarket);
export default router;