// const express = require("express")
// const router = express.Router()

// const { register } = require('../controllers/users.js');



// router.post("/register", register)

// module.exports = router;

import express from 'express';
import { register } from '../controllers/users.js';

const router = express.Router();

router.post('/register', register);

export default router;
