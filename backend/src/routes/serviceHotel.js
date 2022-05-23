import { Router } from "express";
import { getServiceHotel } from "../controllers/serviceHotel";

const router = Router();

router.get("/serviceHotel", getServiceHotel);
export default router;
