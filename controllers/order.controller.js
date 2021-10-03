const order = require('../models/order.model');

// Create and Save a new order
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Save order in the database
  order.create(req.body)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the order."
      });
    });
};

// Retrieve all orders from the database.
exports.findAll = (req, res) => {
  order.findAll({
    where: {
      status: 1,
    },
  })
    .then(orders => {
      res.send(orders);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving orders =" + err
      });
    });
};

// Find a single order with an id
exports.findOne = (req, res) => {
  const id = req.params.orderId;
  order.findOne({
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
        message: "Error retrieving order with id=" + id
      });
    });
};

// Update a order by the id in the request
exports.update = (req, res) => {
  const id = req.params.orderId;

  order.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update order with id=${id}. Maybe order was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating order with id=" + id
      });
    });
};

// Delete a order with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.orderId;

  order.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "order was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete order with id=${id}. Maybe order was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete order with id=" + id
      });
    });
};

// Delete all orders from the database.
exports.deleteAll = (req, res) => {
  order.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} orders were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all orders."
      });
    });
};
