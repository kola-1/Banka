import express from 'express';
import Authcontroller from '../controllers.js/AuthenticationController';
import validateSignup from '../middlewares.js/validations/validateRequest';
import assignToken from '../middlewares.js/helpers.js/assignToken';

const router = express.Router();

// Signup a user
router.post('/signup', validateSignup, assignToken, Authcontroller.signUp);

export default router;
