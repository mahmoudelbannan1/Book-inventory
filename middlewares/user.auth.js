const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const userAuth = async (req, res, next) => {
  try {
    const { email } = jwt.verify(req.headers.token, process.env.JWT);
    const userDoc = await User.findOne({ email }).exec();
    if (!email || !userDoc) throw new Error("");
    next();
  } catch {
    return res.status(401).send({ error: "unauthorized access" });
  }
};

module.exports = userAuth;
