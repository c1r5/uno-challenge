/**
 * @typedef {Object} ItemService
 * @property {(filter: Filter) => Promise<Item[]>} get_todolist
 * @property {(item: Item) => Promise<Item>} add_item
 * @property {(item: Item) => Promise<Item>} update_item
 * @property {(itemId: number) => Promise<boolean>} delete_item
 */

/**
 * @typedef {Object} ItemRepository
 * @property {(filter: Filter) => Promise<Item[]>} find
 * @property {(item: Item) => Promise<Item>} insert
 * @property {(item: Item) => Promise<Item>} update
 * @property {(itemId: number) => Promise<boolean>} delete
 */

/**
 * @typedef {Object} Datasource
 * @property {Item[]} todolist
 * @property {() => Promise<Item[]>} get_todolist
 * @property {() => void} initialize
 * @property {() => void} persist
 * 
 */

/**
 * @typedef {Object} Item
 * @property {number} [itemId]
 * @property {string} name
 * @property {string} [description]
 * @property {boolean} [completed]
 * @property {Date} [createdAt]
 * @property {Date} [updatedAt]
 */

/**
 * @typedef {Object} Filter
 * @property {number} [itemId]
 * @property {string} [name]
 */

/**
 * @typedef {Object} ItemInput
 * @property {number} [itemId]
 * @property {string} name
 * @property {string} [description]
 */

/**
 * @typedef {Object} Query
 * @property {(_: any, variables: {filter: Filter}) => Promise<Item[]>} getTodoList
 */

/**
 * @typedef {Object} Mutation
 * @property {(_: any, variables: {values: ItemInput}) => Promise<Item>} addItem
 * @property {(_: any, variables: {values: ItemInput}) => Promise<Item>} updateItem
 * @property {(_: any, variables: {itemId: number}) => Promise<boolean>} deleteItem
 */

/**
 * @typedef {Object} Resolver
 * @property {Query} Query
 * @property {Mutation} Mutation
 */