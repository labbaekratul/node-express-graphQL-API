const { products } = require("../data");

const getAllProducts = () => {
  return products;
};

module.exports = {
  getAllProducts,
};
