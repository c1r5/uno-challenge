// MODULES

/**
 * @typedef {Object} ItemService
 * @property {(filter: Filter) => Promise<Item[]>} get_todolist
 * @property {(item: Item) => Promise<Item>} add_item
 * @property {(item: Item) => Promise<Item>} update_item
 * @property {(itemId: number) => Promise<boolean>} delete_item
 * @property {() => void} monitor_pending_items
 */

/**
 * @typedef {Object} ItemRepository
 * @property {(filter: ?Filter) => Promise<Item[]>} find
 * @property {(item: Item) => Promise<Item>} insert
 * @property {(item: Item) => Promise<Item>} update
 * @property {(itemId: number) => Promise<boolean>} delete
 */

// EVENTS
/**
 * @typedef {Object} PendingItemsPayload
 * @property {Item[]} items
 */

/**
 * @typedef {Object} EventPayloads
 * @property {PendingItemsPayload} [pendingItemsDetected]
 */

/**
 * @template {keyof EventPayloads} K
 * @typedef {(payload: EventPayloads[K]) => Promise<void>} EventHandler<K>
 */ 

/**
 * @typedef {Object} EventBus
 * @property {<K extends keyof EventPayloads>(event: K, handler: EventHandler<K>) => void} subscribe
 * @property {<K extends keyof EventPayloads>(event: K, handler: EventHandler<K>) => void} unsubscribe
 * @property {<K extends keyof EventPayloads>(event: K, payload: EventPayloads[K]) => void} publish
 */


/**
 * @typedef {Object} Datasource
 * @property {() => Item[]} getTodolist
 * @property {() => Promise<void>} initialize
 * @property {() => Promise<void>} synchronize
 * @property {(newList: Item[]) => Promise<void>} persist
 * 
 */

// DTOS

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
 * @property {boolean} [completed]
 */

// GRAPHQL

/**
 * @typedef {Object} UpdateItemInput
 * @property {number} [itemId]
 * @property {string} name
 * @property {string} [description]
 * @property {boolean} [completed]
 */

/**
 * @typedef {Object} AddItemInput
 * @property {string} name
 * @property {string} [description]
 */

/**
 * @typedef {Object} Query
 * @property {(_: any, variables: {filter: Filter}) => Promise<Item[]>} getTodoList
 */

/**
 * @typedef {Object} Mutation
 * @property {(_: any, variables: {values: AddItemInput}) => Promise<Item>} addItem
 * @property {(_: any, variables: {values: UpdateItemInput}) => Promise<Item>} updateItem
 * @property {(_: any, variables: {itemId: number}) => Promise<boolean>} deleteItem
 */

/**
 * @typedef {Object} Resolver
 * @property {Query} Query
 * @property {Mutation} Mutation
 */