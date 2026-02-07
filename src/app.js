const express = require('express');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser');;
const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth');
const reqRouter = require('./routes/request');
const profileRouter = require('./routes/profile');

app.use("/",authRouter);
app.use("/",reqRouter);
app.use("/",profileRouter);

connectDB()
.then(() => {
    console.log("Server Connected Successfully!");
    app.listen(3000,()=>{
        console.log("SERVER RUNNING ON PORT NUMBER 3000");
    });
})
.catch((err) => {
    console.error("Caught Error");
});



