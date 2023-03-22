const express = require("express");
const { buildSchema } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();

const app = express();

const schema = buildSchema(`
   type Query {
    discription : String
    price: Float
   }
`);

const root = {
  discription: "Red Shoe",
  price: 150.34,
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
