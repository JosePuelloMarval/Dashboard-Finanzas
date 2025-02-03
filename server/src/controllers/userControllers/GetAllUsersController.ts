import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";
export async function GetAllUsersController(req: Request, res: Response) : Promise<Response | any > {
    try {
        const userRepository = AppDataSource.getRepository(User);
        const userBody = await userRepository.find();

        if (userBody.length === 0) {
            return res.status(204).json({ message: "No hay información para mostrar" });
        }

        return res.status(200).json(userBody);
    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}