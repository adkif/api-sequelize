var formatDate = require('date-format');
var bcrypt = require('bcryptjs');
var user = require("../models/user.model");
var dotenv = require("dotenv");
var jwt = require("jsonwebtoken");
var base64ToImage = require("base64-to-image");
var path = require("path");
var helpers = require("../helpers/helpers");

dotenv.config();

exports.login = async (req, res) => {
  let result = await user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then()
    .catch((er) => console.error(er));

  if (result) {
    let is_logged = await bcrypt.compare(req.body.password, result.password);
    if (is_logged) {
      const token = jwt.sign(
        {
          userId: result.id,
          roleId: result.type,
        },
        process.env.secret_token,
        {
          expiresIn: process.env.expire_token,
        }
      );
      return res.status(200).json({
        status: 200,
        loged: true,
        token,
        user: {
          id: result.id,
          email: result.email,
        },
      });
    }
  }
  res.status(200).json({
    status: 400,
    message: "impossible de connectez cet utilisateur",
  });
};

exports.register = async (req, res) => {
  let { email, photo, password, type } = req.body;
  password = await bcrypt.hash(password, 10);
  let photoName = "default.png";
  let created = formatDate("yyyy-MM-dd hh:mm:ss", new Date());
  let date = formatDate("yyyy-mm-dd-hh-MM-ss", new Date());

  if (photo) {
    let generator = await helpers.createTokenValue();
    let imageName = generator + "-" + date;
    photoName = imageName + ".png";

    var base64Str = photo;
    var pathLink = path.join(__dirname, "../public/uploads/images/");
    var optionalObj = { fileName: imageName, type: "png" };

    var imageInfo = await base64ToImage(base64Str, pathLink, optionalObj);

    if (imageInfo) {
      console.log("Photo Uploaded");
    } else {
      console.log("Error Photo Upload");
    }
  }

  let result = await user
    .create({
      email,
      password,
      type,
      photo:photoName
    })
    .then()
    .catch((er) => console.error(er));
  if (result) {
    return res.status(200).json({
      status: 200,
      result,
    });
  }
  res.status(200).json({
    status: 400,
    message: "Impossible d'enregistrer cet utilisateur",
  });
};
