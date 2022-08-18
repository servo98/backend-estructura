import express from 'express';
import { login, register } from '../controllers/authController.js';
import createUserValidator from '../middlewares/createUserValidator.js';
import loginValidator from '../middlewares/loginValidator.js';

const router = express.Router();

router.post('/register', createUserValidator, register);

router.post('/login', loginValidator, login);

export default router;
