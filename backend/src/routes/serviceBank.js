import { Router } from "express";
import { getServiceBank } from "../controllers/serviceBank";

const router = Router();

router.get("/serviceBank", getServiceBank);
export default router;