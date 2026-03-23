const cron = require("node-cron");
const sendEmail = require("./sendEmail");
const ConnectionRequestModel = require("../models/connectionRequests")

cron.schedule("5 12 * * *",async ()=>{
    try{
        const pendingRequest = await ConnectionRequestModel.find({
            status:"interested",
        }).populate("fromUserId toUserId");

        const listOfEmails = [...new Set(pendingRequest.map(req => req.toUserId.emailId))]
        console.log(listOfEmails);
        for(const email of listOfEmails){
            try{
                const res = await sendEmail.run("New Friend Request Recieved "+ email,"Got Request");
                console.log(res);
            }
            catch(err){
                console.log(err);
            }
        }
    }
    catch(err){
        console.log(err);
    }
})