const { getAllProducts } = require("./products.controllers");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
  },
};
