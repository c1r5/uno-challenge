/**
 * @typedef {Object} IItemService
 * @property {(params: { filter: ?Filter, listId: number }) => Promise<Item[]>} get_todolist
 * @property {(params: { value: Item, listId: number }) => Promise<Item>} add_item
 * @property {(params: { value: Item, listId: number }) => Promise<Item>} update_item
 * @property {(params: { itemId: number, listId: number }) => Promise<boolean>} delete_item
 */

/**
 * @typedef {Object} IItemRepository
 * @property {(filter: ?Filter, listId: number) => Promise<Item[]>} find
 * @property {(value: Item, listId: number) => Promise<Item[]>} insert
 * @property {(value: Item, listId: number) => Promise<Item[]>} update
 * @property {(itemId: number, listId: number) => Promise<boolean>} delete
 */

/**
 * @typedef {Record<string, TodoList>} Datasource
 */

/**
 * @typedef {Object} TodoList
 * @property {number} id
 * @property {Date} createdAt
 * @property {Date} updatedAt
 * @property {Item[]} items
 */


/**
 * @typedef {Object} Filter
 * @property {number} [id]
 * @property {string} [prefix]
 */

/**
 * @typedef {Object} Item
 * @property {number} id
 * @property {string} name
 * @property {boolean} completed
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {Object} Query
 * @property {(filter: ?Filter, listId: number) => Promise<Item[]>} getTodoList
 */

/**
 * @typedef {Object} Mutation
 * @property {(value: Item, listId: number) => Promise<Item>} addItem
 * @property {(value: Item, listId: number) => Promise<Item>} updateItem
 * @property {(id: number, listId: number) => Promise<boolean>} deleteItem
 */ 

/**
 * @typedef {Object} Resolver
 * @property {Query} Query
 * @property {Mutation} Mutation
 */