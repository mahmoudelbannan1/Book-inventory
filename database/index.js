const mongoose = require("mongoose");
const dbUrl = process.env.DB_URL;

mongoose.connect(dbUrl)
.then(() => console.log(`connected to ${process.env.DB_NAME} database`))
.catch(err => console.log("database connection Failed:\n" + err));
