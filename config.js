"use strict";
const dotenv = require("dotenv");
const assert = require("assert");

dotenv.config();

const {
  // hosting
  PORT,
  HOST,
  HOST_URL,
  
  // firebase
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,

  // twilio
  ACCOUNT_SID,
  AUTH_TOKEN,
  TWILIO_PHONE_NUMBER, 
  MESSAGING_SERVICE_SID
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");
assert(ACCOUNT_SID, "Twilio ACCOUNT_SID is required");
assert(AUTH_TOKEN, "Twilio AUTH_TOKEN is required");
assert(TWILIO_PHONE_NUMBER, "Twilio TWILIO_PHONE_NUMBER is required");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  firebaseConfig: {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    databaseURL: DATABASE_URL,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
  },
  twilioConfig: {
    accountSid: ACCOUNT_SID,
    authToken: AUTH_TOKEN,
    phoneNumber: TWILIO_PHONE_NUMBER, 
    messagingServiceSid: MESSAGING_SERVICE_SID
  },
};
