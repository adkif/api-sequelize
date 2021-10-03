const product = require('../models/product.model');
const { Op } = require("sequelize");

// Create and Save a new product
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Save product in the database
  product.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the product."
      });
    });
};

// Retrieve all products from the database.
exports.findAll = (req, res) => {

  product.findAll({
    where: {
      status: 1,
    },
  })
    .then(products => {
      res.send(products);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving products =" + err
      });
    });
};

// Find a single product with an id
exports.findOne = (req, res) => {
  const id = req.params.productId;
  product.findOne({
    where: {
      id: id,
      status: 1,
    },
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving product with id=" + id
      });
    });
};

// Update a product by the id in the request
exports.update = (req, res) => {
  const id = req.params.productId;

  product.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "product was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update product with id=${id}. Maybe product was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating product with id=" + id
      });
    });
};

// Delete a product with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.productId;

  product.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "product was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete product with id=${id}. Maybe product was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete product with id=" + id
      });
    });
};

// Delete all products from the database.
exports.deleteAll = (req, res) => {
  product.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} products were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all products."
      });
    });
};

exports.search = (req, res) => {
  product.findAll(
    {
      where: {description: {[Op.like]: '%'+req.query.q+'%'}}
    }
  ).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message: "Error retrieving products =" + err
    });
  });
}