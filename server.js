const path = require("path");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");
require("dotenv").config();

const app = express();

const typesArray = loadFilesSync(path.join(__dirname, "**/*.graphql"));
const resolversArray = loadFilesSync(path.join(__dirname, "**/*.resolvers.js"));
const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running port ${PORT}`);
});
