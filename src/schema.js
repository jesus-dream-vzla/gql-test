import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        role: String!
    }
    type Query{
        listUsers(last: Int): [User!]!
        showUser(name: String!): User!
    }
    type Mutation {
        createUser(name: String!, role: String!): User!
        deleteUser(name: String!): String!
        updateUser(name: String!, role: String!): User!
    }
`