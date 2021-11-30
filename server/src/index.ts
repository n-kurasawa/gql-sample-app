import { ApolloServer, gql } from "apollo-server";
import { Resolvers } from "./generated/graphql";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers: Resolvers = {
  Query: {
    hello: () => "world",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
