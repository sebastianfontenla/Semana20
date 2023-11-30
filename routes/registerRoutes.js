const express = require("express");
const registerController = require("../controllers/registerControllers.js")
const registerRouter = express.Router();

registerRouter.get("/", registerController.getUsers);
registerRouter.post("/", registerController.addUser);


module.exports = registerRouter;