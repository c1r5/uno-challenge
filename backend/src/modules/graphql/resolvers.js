

/**
 * @param {ItemService} item_service
 * @returns {Promise<Resolver>}
 */
export const createResolvers = async (item_service) => {
  return {
    Query: {
      getTodoList: async (_, { filter }) => {
        return item_service.get_todolist(filter);
      }
    },

    Mutation: {
      addItem: async (_, { values }) => {
        return item_service.add_item(values);
      },
      updateItem: async (_, { values }) => {
        return item_service.update_item(values);
      },
      deleteItem: async (_, { itemId }) => {
        return item_service.delete_item(itemId)
      }
    }
  }
}

