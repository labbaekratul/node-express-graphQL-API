const {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
} = require("./products.controllers");

module.exports = {
  Query: {
    products: () => {
      return getAllProducts();
    },
    productsByPrice: (_, agrs) => {
      return getProductByPrice(agrs.min, agrs.max);
    },
    product: (_, agrs) => {
      return getProductById(agrs.id);
    },
  },

  Mutation: {
    addNewProduct: (_, agrs) => {
      return addNewProduct(agrs.id, agrs.description, agrs.price);
    },

    addNewProductReview: (_, agrs) => {
      const dd = addNewProductReview(agrs.id, agrs.rating, agrs.comment);
      console.log(dd);
      return dd;
    },
  },
};
