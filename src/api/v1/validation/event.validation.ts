import Joi from "joi";

export const createEventSchema = Joi.object({
  
  name: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      "string.base": "name must be a string",
      "string.empty": "name is required",
      "string.min": "name must be at least 3 characters long",
      "string.max": "name must be at most 100 characters long",
      "any.required": "name is required",
    }),

  description: Joi.string()
    .max(500)
    .optional()
    .allow("")
    .messages({
      "string.base": "description must be a string",
      "string.max": "description must be at most 500 characters long",
    }),

  location: Joi.string()
    .min(3)
    .max(200)
    .required()
    .messages({
      "string.base": "location must be a string",
      "string.empty": "location is required",
      "string.min": "location must be at least 3 characters long",
      "string.max": "location must be at most 200 characters long",
      "any.required": "location is required",
    }),

  category: Joi.string()
    .valid("online", "in-person", "hybrid")
    .required()
    .messages({
      "any.only": "category must be one of: online, in-person, hybrid",
      "any.required": "category is required",
      "string.base": "category must be a string",
    }),

  capacity: Joi.number()
    .integer()
    .min(1)
    .max(10000)
    .required()
    .messages({
      "number.base": "capacity must be a number",
      "number.integer": "capacity must be an integer",
      "number.min": "capacity must be at least 1",
      "number.max": "capacity must be at most 10000",
      "any.required": "capacity is required",
    }),

  price: Joi.number()
    .min(0)
    .precision(2)
    .default(0)
    .messages({
      "number.base": "price must be a number",
      "number.min": "price cannot be negative",
    }),

  startDate: Joi.string()
    .isoDate()
    .required()
    .messages({
      "string.base": "startDate must be a string",
      "string.isoDate": "startDate must be a valid ISO date",
      "any.required": "startDate is required",
    }),

  endDate: Joi.string()
    .isoDate()
    .required()
    .messages({
      "string.base": "endDate must be a string",
      "string.isoDate": "endDate must be a valid ISO date",
      "any.required": "endDate is required",
    }),

  isPublic: Joi.boolean()
    .default(true)
    .messages({
      "boolean.base": "isPublic must be a boolean",
    }),
})
  // Example cross-field rule: endDate must be after startDate
  .custom((value, helpers) => {
    const start = new Date(value.startDate);
    const end = new Date(value.endDate);

    if (end <= start) {
      return helpers.error("any.custom", {
        message: "endDate must be after startDate",
      });
    }

    return value;
  })
  .messages({
    "any.custom": "{{#message}}",
  });
