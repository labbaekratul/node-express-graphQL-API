const { orders } = require("../data");

const getAllOrders = () => {
  return orders;
};

module.exports = {
  getAllOrders,
};
