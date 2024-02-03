const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
        minLength: 3,
        maxLength: 32,
		required: true
	},
	password: {
		type: String,
        minLength: 8,
        maxLength: 64,
		required: true
	},
	email: {
		type: String,
        minLength: 3,
        maxLength: 128,
		unique: true,
		required: true
	}
}, {versionKey: false});

const User = mongoose.model("User", userSchema);

module.exports = User;
