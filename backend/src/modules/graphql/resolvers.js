
/**
 * 
 * @param {IItemService} service 
 * @returns {Resolver}
 */
const generateResolvers = (service) => ({
  Query: {
    getTodoList: async function (filter, listId) {
      const items = await service.get_todolist({ filter, listId })
      return items
    }
  },
  Mutation: {
    addItem: async function (values, listId) {
      const item = await service.add_item({ value: values, listId })
      return item
    },
    updateItem: async function (values, listId) {
      const item = await service.update_item({ value: values, listId })
      return item
    },
    deleteItem: async function (id, listId) {
      const result = await service.delete_item({ itemId: id, listId })
      return result
    }
  }
})  

export { generateResolvers }