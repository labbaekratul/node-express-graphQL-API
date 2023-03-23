const { products } = require("../data");

const getAllProducts = () => {
  return products;
};

const getProductByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

const addNewProduct = (id, description, price) => {
  const newProduct = { id, description, price, reviews: [] };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (id, rating, comment) => {
  const matchedProduct = getProductById(id);
  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    };
    matchedProduct.reviews.push(newProductReview);
    return newProductReview;
  }
};

module.exports = {
  getAllProducts,
  getProductByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
