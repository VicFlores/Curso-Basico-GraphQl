import { gql } from 'apollo-server';

const schema = gql`
  type Query {
    hello: String
  }
`;

export default schema;
