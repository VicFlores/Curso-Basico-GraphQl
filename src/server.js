import { ApolloServer } from 'apollo-server';
import db from './db';
import resolvers from './graphql/resolvers';
import schema from './graphql/schema';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
});

const connection = async () => {
  try {
    const { url } = await server.listen();
    console.log(`🚀  Server running on ${url} 🚀 `);
    db();
  } catch (error) {
    console.error(`Server error: ${error}`);
  }
};

connection();
