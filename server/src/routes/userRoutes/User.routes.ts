import { Router } from "express";
import { CreateUserController }   from "../../controllers/userControllers/CreateUserController";

const router = Router();

router.post('/create-user', CreateUserController);

export default router;