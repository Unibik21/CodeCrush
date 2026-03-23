const {SendEmailCommand} = require("@aws-sdk/client-ses");
const {sesClient} = require("./sesClient");


const createSendEmailCommand = (toAddress,fromAddress,subject,body) => {
    return new SendEmailCommand({
        Destination:{
            ToAddresses:[toAddress,],
        },
        Message:{
            Body:{
                Text:{
                    Charset:"UTF-8",
                    Data:body,
                }
            },
            Subject:{
                Charset:"UTF-8",
                Data:subject,
            },
        },
        Source: fromAddress,

    });
};

const run = async(subject, body)=>{
    const sendEmailCommand =createSendEmailCommand("utkarshcha21@gmail.com","utkarshcha21@gmail.com",subject,body);

    try{
        return await sesClient.send(sendEmailCommand);
    }
    catch(err){
        throw err;
    }
};

module.exports = {run};