import { gql } from "@apollo/client";

export const GET_TODO_LIST = gql`
  query GetTodoList($filter: Filter) {
    getTodoList(filter: $filter) {
      itemId
      name
      description
      completed
      createdAt
      updatedAt
    }
  }
`;

export const ADD_ITEM_MUTATION = gql`
  mutation AddItem($values: AddItemInput!) {
    addItem(values: $values) {
      itemId
      name
      description
      completed
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UpdateItem($values: UpdateItemInput!) {
    updateItem(values: $values) {
      itemId
      name
      description
      completed
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DeleteItem($itemId: Int!) {
    deleteItem(itemId: $itemId)
  }
`;

