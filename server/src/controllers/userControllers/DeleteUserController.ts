import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";

export async function DeleteUserController(req: Request, res: Response): Promise<Response | any >{
    try {
        const userRepository = AppDataSource.getRepository(User);
        const { id } = req.params;

        const user = await userRepository.findOneBy({ id: id });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        user.active = false;
        await user.save();           
        return res.status(200).json({ message: "Usuario eliminado correctamente" });
    } catch (error) {
        return res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
}
