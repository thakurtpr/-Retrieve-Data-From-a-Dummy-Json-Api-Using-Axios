const { body, validationResult } = require("express-validator");

const postvalidator = [
  body("id").notEmpty().isInt(),
  body("title").notEmpty().isString(),
  body("description").notEmpty().isString(),
  body("price").notEmpty().isInt(),
  body("discountPercentage").notEmpty().isFloat(),
  body("rating").notEmpty().isFloat(),
  body("stock").notEmpty().isInt(),
  body("brand").notEmpty().isString(),
  body("category").notEmpty().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];
console.log(postvalidator);
const putvalidator = [
  // body("id").isInt(),
  body("title").notEmpty().isString(),
  // body("description").isString(),
  // body("price").isInt(),
  // body("discountPercentage").isFloat(),
  // body("rating").isFloat(),
  // body("stock").isInt(),
  // body("brand").isString(),
  // body("category").isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];
const isIntegerWithoutQuotes = (value) => {
  // Check if the value is a number and not a string
  return typeof value === "number" && Number.isInteger(value);
};
const patchvalidator = [
  // body("id").isInt(),
  // body("title").notEmpty().isString(),
  // body("description").isString(),
  body("price").notEmpty().custom(isIntegerWithoutQuotes).isInt(),
  // body("discountPercentage").isFloat(),
  // body("rating").isFloat(),
  // body("stock").isInt(),
  // body("brand").isString(),
  // body("category").isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    next();
  },
];
module.exports = postvalidator;
