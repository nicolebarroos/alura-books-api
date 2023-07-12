import express from "express";
import { createUser, login, listUsers, listUser } from '../controlers/users.js';

const router = express.Router()

router.post('/', createUser);
router.get('/', listUsers);
router.get('/:id', listUser);
router.post('/login', login);
export default router;
