import { getRandomInt } from "../../application/utils/item.utils.js";
import { id_existence_check, name_existence_check, name_validation } from "../../domain/validate_item.js";

/**
 * 
 * Responsável por acessar e manipular os itens no datasource (persistência via arquivo JSON).
 * 
 * Funções principais:
 * - Buscar itens com filtros opcionais.
 * - Inserir novos itens com validações de nome e ID.
 * - Atualizar informações específicas de um item.
 * - Deletar um item da lista.
 * 
 * @param {Datasource} datasource - Fonte de dados utilizada para persistência.
 * @returns {ItemRepository}
 */
export const itemRepository = (datasource) => {
  return {
    /**
     * Busca os itens da lista aplicando filtros opcionais.
     * 
     * @param {Filter} [filter] - Filtro opcional por nome ou itemId.
     * @returns {Promise<Item[]>} Lista de itens filtrados ou todos os itens.
     */
    find: async function (filter) {
      const todolist = await datasource.get_todolist();

      if (!filter) return todolist;

      return todolist
        .filter(item => filter.name ? item.name.includes(filter.name) : true)
        .filter(item => filter.itemId ? item.itemId === filter.itemId : true);
    },

    /**
     * Insere um novo item na lista após validações.
     * 
     * @param {Item} item - Novo item a ser inserido.
     * @returns {Promise<Item>} Item inserido.
     * @throws {Error} Se nome for duplicado ou ID já existir.
     */
    insert: async function (item) {
      const datetime_now = new Date();
      const todolist = await datasource.get_todolist();

      /** @type {Item} */
      let new_item = {
        ...item,
        completed: false,
        itemId: getRandomInt(),
        createdAt: datetime_now,
        updatedAt: datetime_now,
      };

      name_existence_check(item, todolist);

      if (id_existence_check(new_item.itemId, todolist)) {
        throw new Error('item_already_exists');
      }

      todolist.push(new_item);
      datasource.persist();

      return new_item;
    },

    /**
     * Atualiza um item existente na lista.
     * 
     * @param {Item} item - Dados atualizados do item.
     * @returns {Promise<Item>} Item atualizado.
     * @throws {Error} Se a lista estiver vazia ou o item não existir.
     */
    update: async function (item) {
      const todolist = await datasource.get_todolist();

      if (!todolist.length) throw new Error('empty_list');
      if (!id_existence_check(item.itemId, todolist)) throw new Error('item_not_exists');

      const index = todolist.findIndex(i => i.itemId === item.itemId);

      todolist[index] = {
        ...todolist[index],
        name: item.name || todolist[index].name,
        description: item.description,
        completed: item.completed || todolist[index].completed,
        updatedAt: new Date()
      };

      datasource.persist();
      return todolist[index];
    },

    /**
     * Remove um item da lista pelo ID.
     * 
     * @param {number} itemId - ID do item a ser removido.
     * @returns {Promise<boolean>} Verdadeiro se o item foi removido.
     * @throws {Error} Se a lista estiver vazia ou o item não existir.
     */
    delete: async function (itemId) {
      const todolist = await datasource.get_todolist();

      if (!todolist.length) throw new Error('empty_list');
      if (!id_existence_check(itemId, todolist)) throw new Error('item_not_exists');

      const index = todolist.findIndex(item => item.itemId === itemId);

      todolist.splice(index, 1);
      datasource.persist();

      return true;
    }
  };
};
