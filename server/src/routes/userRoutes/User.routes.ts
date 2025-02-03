import { Router } from "express";
import { CreateUserController } from "../../controllers/userControllers/CreateUserController";
import { GetAllUsersController } from "../../controllers/userControllers/GetAllUsersController";

const router = Router();

router.post('/create-user', CreateUserController);
router.get('/getAll-users', GetAllUsersController);

export default router;