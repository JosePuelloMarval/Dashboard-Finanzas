import { Router } from "express";
import { CreateUserController } from "../../controllers/userControllers/CreateUserController";
import { GetAllUsersController } from "../../controllers/userControllers/GetAllUsersController";
import { UpdateUserController } from "../../controllers/userControllers/UpdateUserController";
import { DeleteUserController } from "../../controllers/userControllers/DeleteUserController";

const router = Router();

router.post('/create-user', CreateUserController);
router.get('/getAll-users', GetAllUsersController);
router.put('/update-user', UpdateUserController);
router.delete("/delete-user/:id", DeleteUserController);

export default router;