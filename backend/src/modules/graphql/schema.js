export default `#graphql

  type Item {
    id: Int!
    name: String!
    description: String
    completed: Boolean!
    createdAt: String!
    updatedAt: String!
  }

  input ItemFilterInput {
    id: Int
    name: String
  }

  input ItemInput {
    id: Int!
    name: String
    description: String
    completed: Boolean
  }

  type Query {
    getTodoList(filter: ItemFilterInput, listId: Int!): [Item!]!
  }

  type Mutation {
    addItem(value: ItemInput!, listId: Int!): Item!
    updateItem(value: ItemInput!, listId: Int!): Item!
    deleteItem(id: Int!, listId: Int!): Boolean!
  }
`;