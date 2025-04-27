export default `#graphql

  type Item {
    itemId: Int
    name: String
    description: String
    completed: Boolean
    createdAt: String
    updatedAt: String
  }

  input Filter {
    itemId: Int
    name: String
  }

  input AddItemInput {
    itemId: Int!
    name: String!
    description: String
    completed: Boolean
  }
  
  input UpdateItemInput {
    itemId: Int!
    name: String
    description: String
    completed: Boolean
  }
  
  type Query {
    getTodoList(filter: Filter): [Item!]!
  }
  
  type Mutation {
    addItem(values: AddItemInput!): Item!
    updateItem(values: UpdateItemInput!): Item!
    deleteItem(itemId: Int!): Boolean!
  }
`;