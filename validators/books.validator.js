const Joi = require("joi");

const schema = {
  title: Joi.string().alphanum().min(5).max(128),
  author: Joi.string().alphanum().min(5).max(128),
  puplicationDate: Joi.date(),
  price: Joi.number(),
};
const updateSchema = Joi.object(schema);
const creationSchema = Joi.object({
  ...schema,
  title: schema.title.required(),
  author: schema.author.required(),
});

const createBookValidation = (book) => creationSchema.validate(book);
const updateBookValidation = (book) => updateSchema.validate(book);

module.exports = {
  createBookValidation,
  updateBookValidation,
};
