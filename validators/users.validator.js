const Joi = require("joi");

const schema = {
	username: Joi.string().alphanum().min(3).max(32).required(),
	password: Joi.string().min(8).max(64).required(),
	email: Joi.string().email().required()
};

const newUserValidation = book => Joi.object(schema).validate(book);

module.exports = { newUserValidation };
