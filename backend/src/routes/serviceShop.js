import { Router } from "express";
import { getServiceShop } from "../controllers/serviceShop";

const router = Router();

router.get("/serviceShop", getServiceShop);
export default router;