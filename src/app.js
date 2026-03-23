require("dotenv").config();
const express = require('express');
const connectDB = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const http = require("http");

app.use(cors({
    origin: "http://localhost:5173",    
    credentials:true,
}));
app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth');
const reqRouter = require('./routes/request');
const profileRouter = require('./routes/profile');
const userRouter = require('./routes/user');
const initializeSocket = require("./utils/socket");
const chatRouter = require("./routes/chat");

require("./utils/cronJob");

app.use("/",authRouter);
app.use("/",reqRouter);
app.use("/",profileRouter);
app.use("/",userRouter);
app.use("/",chatRouter);

const server = http.createServer(app);
initializeSocket(server);

connectDB()
.then(() => {
    console.log("Server Connected Successfully!");
    server.listen(process.env.PORT,"0.0.0.0",()=>{
        console.log("SERVER RUNNING ON PORT NUMBER 3000");
    });
})
.catch((err) => {
    console.error("Caught Error");
});



