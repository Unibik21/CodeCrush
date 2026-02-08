const mongoose = require('mongoose');

const connectionRequestSchema = new mongoose.Schema({
    fromUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
    toUserId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },
    status:{
        type:String,
        enum:{
            values:["accepted","ignored","interested","rejected"],
            message:"NOT VALID STATUS"
        },
        required:true,
    },
},{
    timestamps:true
})

const ConnectionRequestModel = mongoose.model("ConnectionRequest",connectionRequestSchema);
module.exports = ConnectionRequestModel;