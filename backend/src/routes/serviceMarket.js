import { Router } from "express";
import { getServiceMarket } from "../controllers/serviceMarket";

const router = Router();

router.get("/serviceMarket", getServiceMarket);
export default router;