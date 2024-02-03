const express = require("express");
const usersRouter = express.Router();
const {
	createUser,
	getAllUsers,
	logingUser,
} = require("../controllers/users.controller");


usersRouter.get("/", getAllUsers);
usersRouter.post("/register", createUser);
usersRouter.post("/login", logingUser);


module.exports = usersRouter;
