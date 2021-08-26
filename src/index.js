const { ApolloServer } = require("apollo-server");

const db = require("./config/connection");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 3001;

db.once("open", () => {
  server.listen({ port: PORT }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});
