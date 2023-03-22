const { getAllOrders } = require("./orders.controllers");

module.exports = {
  Query: {
    orders: () => {
      return getAllOrders();
    },
  },
};
