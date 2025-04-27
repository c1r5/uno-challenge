/**
 * 
 * @param {Item} item 
 */
export function name_validation(item) {
  if (!item.name) { throw new Error('invalid_field') }
  if (!item.name.trim()) { throw new Error('invalid_field') }
}

/**
 * 
 * @param {Item} item 
 * @param {Item[]} todolist
 */
export function name_existence_check(item, todolist) {
  if (todolist.some(i => i.name == item.name)) { throw new Error('name_already_exists') }
}

/**
 * 
 * @param {number} itemId 
 * @param {Item[]} todolist 
 */
export function id_existence_check(itemId, todolist) {
  return todolist.some(i => i.itemId == itemId)
}