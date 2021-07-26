const { ApolloServer } = require("apollo-server");

const db = require("./config/connection");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

db.once("open", () => {
  server.listen().then(({ URL }) => {
    console.log(`Server ready at ${URL}`);
  });
});
