/**
 * @implements {IItemRepository}
 */
export class ItemRepository {
  /**
   * @param {Datasource} datasource
   */
  constructor(datasource = {}) {
    this.datasource = datasource;
  }

  /**
   * @param {?Filter} filter
   * @param {number} listId
   * @returns {Promise<Item[]>}
   */
  async find(filter, listId) {
    const list = this.datasource[listId];
    if (!list) return [];

    let items = list.items;
    if (filter?.id != null) {
      items = items.filter(item => item.id === filter.id);
    }
    if (filter?.prefix != null) {
      items = items.filter(item => item.name.startsWith(filter.prefix));
    }

    return items;
  }

  /**
   * @param {Item} value
   * @param {number} listId
   * @returns {Promise<Item[]>}
   */
  async insert(value, listId) {
    const list = this.datasource[listId];
    if (!list) {
      this.datasource[listId] = {
        id: listId,
        createdAt: new Date(),
        updatedAt: new Date(),
        items: [],
      };
    }

    list.items.push(value);
    list.updatedAt = new Date();
    return list.items;
  }

  /**
   * @param {Item} value
   * @param {number} listId
   * @returns {Promise<Item[]>}
   */
  async update(value, listId) {
    const list = this.datasource[listId];
    if (!list) throw new Error("List not found");

    const index = list.items.findIndex(item => item.id === value.id);
    if (index === -1) throw new Error("Item not found");

    list.items[index] = { ...list.items[index], ...value, updatedAt: new Date() };
    list.updatedAt = new Date();
    return list.items;
  }

  /**
   * @param {number} itemId
   * @param {number} listId
   * @returns {Promise<boolean>}
   */
  async delete(itemId, listId) {
    const list = this.datasource[listId];
    if (!list) return false;

    const index = list.items.findIndex(item => item.id === itemId);
    if (index === -1) return false;

    list.items.splice(index, 1);
    list.updatedAt = new Date();
    return true;
  }
}