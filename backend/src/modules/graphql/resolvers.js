import { itemService } from "../item/application/services/item.service.js";
import { itemRepository } from "../item/infra/repositories/item.repository.js";
import itemDatasource from '../item/infra/db/db.js';

const datasource = itemDatasource('db.json')
datasource.initialize()

const item_repository = itemRepository(datasource);
const item_service = itemService(item_repository)

/**
 * @type {Resolver} 
 */
const resolvers = {
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

export {
  resolvers
}