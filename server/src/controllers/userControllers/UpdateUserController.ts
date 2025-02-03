import { Request, Response } from "express";
import { AppDataSource } from "../../db";
import { User } from "../../entities/users/User";
import { validatorEmail, validaTel, validatePassword } from "../../utils/utils";

export async function UpdateUserController (req: Request, res: Response): Promise<Response | any>{
    try {
        const { name, lastname, email, password, phone } = req.body;
        if(!name || !lastname || !email || !phone || !password ){
            return res.status(400).json({error: "Bad request, missing data"})
        }
        if(!validatorEmail(email)){
            return res.status(400).json({error: "formato de correo invalido"})
        }
        if(!validaTel(phone)){
            return res.status(400).json({error: "numero de telefono incorrecto"});
        }

        if(!validatePassword(password)){
            return res.status(400).json({error: "formato de password invalido"})
        }
        const userRepository = AppDataSource.getRepository(User);
        const userBody = await userRepository.findOne({ where: { email } });
        if(userBody){
            userBody.name = name;
            userBody.last_name = lastname;
            userBody.email = email;
            userBody.password = password;
            userBody.phone = phone; 
            userBody.active = true;
            await userBody.save();           
            return res.status(201).json(userBody);
        }
        return res.status(500).json({message: "Ya no existe un usuario con este correo"})
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message})
        }   
    }
}