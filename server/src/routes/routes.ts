import { Router } from "express";
import UserRoutes from "./userRoutes/User.routes";

const router = Router();

router.use('/user', UserRoutes);

export default router;
