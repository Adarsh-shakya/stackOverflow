import express from 'express';

import {login,signup} from '../controllers/Auth.js';
import { getAllUsers, updateProfile} from '../controllers/Users.js';
import auth from '../middelwares/auth.js'

const router=express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)

export default  router;