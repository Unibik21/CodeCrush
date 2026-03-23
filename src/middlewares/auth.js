const jwt = require('jsonwebtoken')
const User = require('../models/user')

const userAuth = async(req,res,next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).send("PLEASE LOGIN");
        }
        const decodedObj = jwt.verify(token,process.env.JWT_SECRET);
        const _id = decodedObj._id;
        const user = await User.findById(_id);
        if(!user){
            throw new Error("USER NOT FOUND");
        }
        req.user = user;
        next();
    } catch(err) {
        res.status(401).send("ERROR: " + err.message);
    }
}

module.exports = userAuth;