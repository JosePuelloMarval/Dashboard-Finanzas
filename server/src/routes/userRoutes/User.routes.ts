import { Router } from "express";
import { CreateUserController } from "../../controllers/userControllers/CreateUserController";
import { GetAllUsersController } from "../../controllers/userControllers/GetAllUsersController";
import { UpdateUserController } from "../../controllers/userControllers/UpdateUserController";

const router = Router();

router.post('/create-user', CreateUserController);
router.get('/getAll-users', GetAllUsersController);
router.put('/update-user', UpdateUserController)

export default router;