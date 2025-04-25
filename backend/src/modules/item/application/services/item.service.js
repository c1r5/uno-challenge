/**
 * @implements {IItemService}
 */
export class ItemService {
  /**
   * @param {IItemRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * @param {{ filter: ?Filter, listId: number }} params
   * @returns {Promise<Item[]>}
   */
  async get_todolist({ filter, listId }) {
    return this.repository.find(filter, listId);
  }

  /**
   * @param {{ value: Item, listId: number }} params
   * @returns {Promise<Item>}
   */
  async add_item({ value, listId }) {
    const items = await this.repository.insert(value, listId);
    return items.find(i => i.id === value.id);
  }

  /**
   * @param {{ value: Item, listId: number }} params
   * @returns {Promise<Item>}
   */
  async update_item({ value, listId }) {
    const items = await this.repository.update(value, listId);
    return items.find(i => i.id === value.id);
  }

  /**
   * @param {{ itemId: number, listId: number }} params
   * @returns {Promise<boolean>}
   */
  async delete_item({ itemId, listId }) {
    return this.repository.delete(itemId, listId);
  }
}