const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// createUser
const createUser = async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return await User.create(user);
};

// /getAllUsers
const getAllUsers = async () => await User.find({});

// login
const login = async (user) => {
  let userDoc = await User.findOne({ email: user.email });
  if (!userDoc) return { error: "wrong email or password" };

  let correct = await bcrypt.compare(user.password, userDoc.password);
  if (!correct) return { error: "wrong email or password" };

  const token = jwt.sign({ email: user.email }, process.env.JWT, {
    expiresIn: "1h",
  });
  return { token };
};

module.exports = {
  login,
  createUser,
  getAllUsers,
};
