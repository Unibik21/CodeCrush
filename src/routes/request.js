const express = require('express');
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const userAuth = require('../middlewares/auth')
const reqRouter = express.Router();



module.exports = reqRouter;