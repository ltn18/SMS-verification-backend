const express = require("express");
const { addUser, validateAccessCode, createNewAccessCode } = require("../controllers/userController");

const router = express.Router();

router.post("/user", addUser);
router.post("/user/:id", validateAccessCode);
router.post("/user/:id/newCode", createNewAccessCode);

module.exports = {
  routes: router,
};
