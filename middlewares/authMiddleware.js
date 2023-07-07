import jwt from 'jsonwebtoken';
import { chaveSecreta } from "../src/controlers/users.js";

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    console.log(token)

    if (!token){
        return res.status(401).json({message: "Token não fornecido"});
    }

    try{
        const decoded = jwt.verify(token, chaveSecreta);
        req.userId = decoded.userId;

        //parâmetro presente nas funções de middleware do Express
        //Ela é responsável por passar o controle(sequência) para o próximo middleware ou rota 
        next();
    }
    catch(error){
        console.log(error.message)
        return res.status(401).json({message: "Token inválido"});
    }
};

export default verifyToken;