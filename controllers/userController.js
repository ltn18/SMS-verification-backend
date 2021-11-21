"use strict";

// TODO:
// last thing to do is to show on frontend 2 things:
// 1. whether the record is saved successfully
// 2. whether the phone has been verified

// services
const generateAccessCode = require("../services/generate-code");
const sendSMS = require("../services/send-sms");

// firebase
const firebase = require("../db");
const firestore = firebase.firestore();

const addUser = async (req, res, next) => {
  try {
    const data = req.body;
    const phoneNumber = data.phoneNumber;
    data.accessCode = generateAccessCode();

    const users = await firestore
      .collection("users")
      .where("phoneNumber", "==", phoneNumber)
      .get();

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

const validateAccessCode = async (req, res, next) => {
  try {
    const phoneNumber = req.params.id;
    const data = req.body;

    // this will get user of similar phone
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
