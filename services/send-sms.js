// const config = require("../config");
const config = require("../config");

const accountSid = config.twilioConfig.accountSid;
const authToken = config.twilioConfig.authToken;

// console.log("Account SID: " + accountSid);
// console.log("Auth Token: " + authToken);

const twilio = require("twilio");
const client = twilio(accountSid, authToken);

const sendSMS = (phoneNumber, accessCode) => {
  client.messages
  .create({
    body: `Your access code to verify phone number: ${accessCode}`,
    from: config.twilioConfig.phoneNumber,
    to: `+1${phoneNumber}`,
  })
  .then((message) => console.log(message.sid))
  .done();
}

module.exports = sendSMS

