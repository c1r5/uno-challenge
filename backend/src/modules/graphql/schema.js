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
    completed: Boolean
  }

  input AddItemInput {
    name: String!
    description: String
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