import Books from "../models/livros.js";

export const createBook = async (req, res) => {
    try{
        const {title, description, author} = req.body;
        const newBook = new Books({title, description, author})
        const saveBook = await newBook.save();
        res.status(201).json(saveBook);
    }catch (error){
        res.status(500).json({message: 'Erro ao criar livro', erro: error.message})
    }
};

export const listBooks = async (req, res) => {
    try{
        const books = await Books.find();
        res.json(books);
    }catch (error){
        res.status(500).json({message: "Erro ao listar livros", erro:error.message});
    }
};

export const listBook = async (req, res) => {
    try{
        const {id} = req.params;
        const book = await Books.findById(id);

        if (book){
            res.json(book);
        }else{
            res.status(404).json({message: "Livro não encontrado"});
        }
    }catch (error){
        res.status(500).json({message: "Erro ao buscar livro", erro: error.message});
    }
};

export const updateBook = async(req, res) => {
    try{
        const {title, description, author} = req.body;
        const {id} = req.params;
        const book = await Books.findByIdAndUpdate(id, {title, description, author});

        if (livro){
            res.json(book)
        }else{
            res.status(400).json({message: "Livro não encontrado"});
        }
    }catch (error){
        res.status(500).json({message: "Erro ao atualizar livro"});
    }
};

export const deleteBook = async(req, res) =>{
    try{
        const {id} = req.params;
        const book = await Books.findByIdAndDelete(id);
        if (livro){
            res.json({message: "Livro excluído com sucesso"});
        }else{
            res.status(404).json({message: "Livro não encontrado"});
        }

    }catch (error){
        res.status(500).json({message: "Erro ao excluir livro"});
    }
};