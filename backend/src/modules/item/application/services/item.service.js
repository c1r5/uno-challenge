import { name_validation } from "../../domain/validate_item.js";

/**
 * 
 * @param {ItemRepository} repository 
 * @returns {ItemService}
 */
export const itemService = (repository) => ({
  get_todolist: function (filter = null) {
    return repository.find(filter);
  },
  add_item: function (item) {
    name_validation(item)

    return repository.insert(item);
  },
  update_item: function (item) {
    name_validation(item)
    return repository.update(item);
  },
  delete_item: function (itemId) {
    return repository.delete(itemId);
  }
});