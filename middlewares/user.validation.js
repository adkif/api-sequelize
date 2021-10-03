var joi = require("joi");
var user = require("../models/user.model");

exports.login = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().min(10).required(),
    password: joi.string().min(3).required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(200).json({
      status: 400,
      message: error.details[0].message,
    });
  }
  next();
};

exports.register = async (req, res, next) => {

  const schema = joi.object({
    email: joi.string().min(3).max(50),
    type: joi.number().required(),
    photo: joi.any(),
    password: joi.string().min(3).max(50).required(),
  });

  console.log(req.body);

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(200).json({
      status: 400,
      message: error.details[0].message,
    });
  }

  if (req.body.email) {
    const checkEmail = await user
      .findOne({
        where: {
          email: req.body.email,
        },
      })
      .then()
      .catch((er) => console.error(er));

    if (checkEmail) {
      return res.status(200).json({
        status: 400,
        message: "cet email existe deja :(",
      });
    } else {
      return next();
    }
  }
};
