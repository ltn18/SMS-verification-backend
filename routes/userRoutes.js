const express = require("express");
const { addUser } = require("../controllers/userController");

const router = express.Router();

router.post("/student", addStudent);

module.exports = {
  routes: router,
};