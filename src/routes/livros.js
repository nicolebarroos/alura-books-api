import express from "express";
import verifyToken from "../../middlewares/authMiddleware.js";
import { 
    createBook, 
    listBook, 
    deleteBook,
    updateBook,
    listBooks
} from "../controlers/livros.js";

const router = express.Router()

router.post('/', createBook);
router.get('/', verifyToken, listBooks);
router.get("/:id", listBook);
router.delete("/:id", deleteBook);
router.put("/:id", updateBook)

export default router;