import Users from "../models/users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import randomString from 'crypto-random-string';
const chaveSecreta = randomString({ length: 32, type: 'hex' });


export const createUser = async(req, res) => {
    try{
        const {email, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10); // 10 é o número de salt rounds
        const newUser = new Users({ email, password: hashedPassword });
        const saveUser = await newUser.save();
        res.status(201).json(saveUser);
    }catch (error){
        res.status(500).json({message: 'Erro ao criar usuário', erro: error.message})
    }
};

export const login = async(req, res) =>{
    try{
        const {email, password} = req.body;

        const user = await Users.findOne({email});
        if (!user){
            res.status(401).json({message: 'Credenciais incorretas'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid){
            res.status(401).json({message: 'Senha incorreta'});
        }
        // underline é uma convenção comumente usada para se referir ao identificador único (ID) de um documento em um banco de dados NoSQL
        // em outro caso, para tornar mais segura a criação de armazenamento da chave secreta
        // optaria por usar serviço de gestão de segredos, como o AWS Secrets Manager 
        // localmente criaria uma chave, a mandaria para o gestor de segredos 
        const token = jwt.sign({ userId: user._id }, chaveSecreta, { expiresIn: '1h' });
        res.json({token});
    }catch (error){
        res.status(500).json({message: 'Erro ao fazer login', error: error.message});
    }
};