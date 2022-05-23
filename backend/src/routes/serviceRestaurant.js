import { Router } from "express";
import { getServiceRestaurant } from "../controllers/serviceRestaurant";

const router = Router();

router.get("/serviceRestaurant", getServiceRestaurant);
export default router;