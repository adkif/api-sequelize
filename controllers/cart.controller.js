const cart = require('../models/cart.model');

// Create and Save a new cart
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Save cart in the database
  cart.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the cart."
      });
    });
};

// Retrieve all carts from the database.
exports.findAll = (req, res) => {
  cart.findAll({
    where: {
      status: 1,
    },
  })
    .then(carts => {
      res.send(carts);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving carts =" + err
      });
    });
};

// Find a single cart with an id
exports.findOne = (req, res) => {
  const id = req.params.cartId;
  cart.findOne({
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
        message: "Error retrieving cart with id=" + id
      });
    });
};

// Update a cart by the id in the request
exports.update = (req, res) => {
  const id = req.params.cartId;

  cart.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "cart was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update cart with id=${id}. Maybe cart was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating cart with id=" + id
      });
    });
};

// Delete a cart with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.cartId;

  cart.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "cart was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete cart with id=${id}. Maybe cart was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete cart with id=" + id
      });
    });
};

// Delete all carts from the database.
exports.deleteAll = (req, res) => {
  cart.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} carts were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all carts."
      });
    });
};