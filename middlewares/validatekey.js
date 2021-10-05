var dotenv = require("dotenv");

dotenv.config();

const validateKey = async (req, res, next) => {
  if (req.headers.key == process.env.ACCESS_KEY) {
    return next();
  } else {
    res.status(200).json({
      status: 404,
      message: "Wrong Access key, please check your access key",
    });
  }
};

module.exports = validateKey;
