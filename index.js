import express from "express"
import mongoose from "mongoose"
import booksRouter from './src/routes/livros.js';

const app = express()
const port = 8000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/meu-banco-de-dados', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao banco de dados:', error.message);
    });

app.get('/', (req, res)=>{
    res.send("Bem vindo à api de livros")
})

app.use('/livros', booksRouter);

app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})

