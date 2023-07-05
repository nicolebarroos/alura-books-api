import express from "express";
import { 
    createBook, 
    listBook, 
    deleteBook,
    updateBook,
    listBooks
} from "../controlers/livros.js";

const router = express.Router()

router.post('/', createBook);
router.get('/', listBooks);
router.get("/:id", listBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook)

export default router;