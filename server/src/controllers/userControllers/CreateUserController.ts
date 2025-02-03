import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";
import { validatePassword, validatorEmail } from "../../utils/utils";

export async function CreateUserController (req: Request, res: Response): Promise<Response | any>{
    try {
        const { name, lastname, email, password, phone } = req.body;
        if(!name || !lastname || !email || !phone || !password ){
            return res.status(400).json({error: "Bad request, missing data"})
        }
        if(!validatorEmail(email)){
            return res.status(400).json({error: "formato de correo invalido"})
        }
        if(!validatePassword(password)){
            return res.status(400).json({error: "formato de password invalido"})
        }
        const userRepository = AppDataSource.getRepository(User);
        const userBody = await userRepository.findOne({ where: { email } });
        if(!userBody){
            const user = new User(); 
            user.name = name;
            user.last_name = lastname;
            user.email = email;
            user.password = password;
            user.phone = phone; 
            user.active = true;
            const createUser = await userRepository.save(user);           
            return res.status(201).json(createUser);
        }
        return res.status(500).json({message: "Ya existe un usuario con este correo"})
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message})
        }   
    }
}

