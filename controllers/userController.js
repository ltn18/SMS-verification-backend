"use strict";

// services
const generateAccessCode = require("../services/generate-code");
const sendSMS = require("../services/send-sms");

// firebase
const firebase = require("../db");
const firestore = firebase.firestore();

// add user to firestore DB
// get data posted from frontend
// update the accessCode of the posted data
// to the new generated code
// add user to the firestore DB
// send SMS to user's phone number
const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const phoneNumber = data.phoneNumber;
    data.accessCode = generateAccessCode();

    const users = await firestore.collection("users").get();

    if (users.empty) {
      await firestore.collection("users").doc().set(data);
      res.send("Record saved successfuly");
      next(sendSMS(phoneNumber, data.accessCode));
    } else {
      res.send("User already exist");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// validate access code
// find matching phone number user in firestore
// and check if the accessCode matches
// if verified, set accessCode to ""
const validateAccessCode = async (req, res, next) => {
  try {
    const phoneNumber = req.params.id;
    const data = req.body;

    const usersRef = await firestore.collection("users");
    const users = await usersRef.where("phoneNumber", "==", phoneNumber).get();

    users.forEach((doc) => {
      if (doc.data().accessCode == data.accessCode) {
        res.send("Verified");
        doc.ref.update({ accessCode: "" });
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// create a new access code
// find matching phone number user in firestore DB
// generate a new code
// update the user's accessCode to the new code
// send SMS again to user
const createNewAccessCode = async (req, res, next) => {
  try {
    const phoneNumber = req.params.id;
    const data = req.body;
    const usersRef = await firestore.collection("users");
    const users = await usersRef.where("phoneNumber", "==", phoneNumber).get();
    const code = generateAccessCode();

    users.forEach((doc) => {
      if (doc.data().phoneNumber == data.phoneNumber) {
        doc.ref.update({ accessCode: code });
      }
    });

    next(sendSMS(phoneNumber, code));
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addUser,
  validateAccessCode,
  createNewAccessCode,
};
