const express = require('express');
const User = require("../models/user");
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
const userAuth = require('../middlewares/auth')
const profileRouter = express.Router();

profileRouter.get("/profile",userAuth,async(req,res)=>{
    const {user} = req;
    try{
        res.send(user);
    }
    catch(err){
        res.status(400).send("ERROR : "+ err.message);
    }
}); 


module.exports = profileRouter;