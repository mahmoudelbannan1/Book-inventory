require("dotenv").config();
require("./database");
const express = require("express");
const mongoose = require("mongoose");
const booksRouter = require("./routers/books.router");
const usersRouter = require("./routers/users.router");
const userAuth = require("./middlewares/user.auth");

const app = express();
const port = process.env.PORT || 8080;

//middleware=================================================
//to parse json formatted string into javascript object
app.use(express.json());
// mount the root of the server to the public folder
// serves static pages
app.use(express.static("public"));

//mount the user router at /users/
app.use("/users/", usersRouter);

//authentication middleware
app.use(userAuth);
//mount the user router at /api/books/
app.use("/api/books/", booksRouter);

// only start listening when there is a database connection
mongoose.connection.once("open", () => {
  app.listen(port, () => console.log(`listening on port ${port}`));
});
