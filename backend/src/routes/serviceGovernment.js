import { Router } from "express";
import { getServiceGovernment } from "../controllers/serviceGovernment";

const router = Router();

router.get("/serviceGovernment", getServiceGovernment);
export default router;
