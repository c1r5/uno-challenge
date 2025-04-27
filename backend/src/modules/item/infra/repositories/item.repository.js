import { getRandomInt } from "../../application/utils/item.utils.js";
import { id_existence_check, name_existence_check, name_validation } from "../../domain/validate_item.js";

/**
 * 
 * @param {Datasource} datasource 
 * @returns {ItemRepository}
 */
export const itemRepository = (datasource) => {

  return {
    /**
     * Busca os itens da lista utilizando filtros
     * 
     * @param {Filter} filter - Filtro opcional
     * 
     * Filtro:
     * - Verifica se há um filtro, se não, retorna a lista inteira, caso contrário:
     * - Verifica se o filtro de nome está presente, se sim, busca pelo termo parcial.
     * - Verifica se o filtro de ID de item está presente, se sim, busca pelo ID exato.
     * 
     * Retorno:
     * @returns {Promise<Item[]>} Lista de itens
     */
    find: async function (filter) {
      const todolist = await datasource.get_todolist();

      if (!filter) return todolist

      return todolist
        .filter(item => filter.name ? item.name.includes(filter.name) : true)
        .filter(item => filter.itemId ? item.itemId === filter.itemId : true)
    },
    /** 
     * Insere um novo item na lista de tarefas (todolist).
     * 
     * @param {Item} item - Os parâmetros para a inserção.
     * @returns {Promise<Item>} O item inserido.
     * 
     * @throws {Error} Se o nome do item estiver vazio ou se já existir um item com o mesmo nome na lista de tarefas.
     * 
     * Validações:
     * - Verifica se o nome do item está em branco ou vazio.
     * - Garante que nenhum outro item na lista de tarefas tenha o mesmo nome.
     * 
     * Efeitos Colaterais:
     * - Chama o método `datasource.persist()` para persistir as alterações.
     */
    insert: async function (item) {
      const datetime_now = new Date()
      const todolist = await datasource.get_todolist();

      /**
       * @type {Item}
       */
      let new_item = {
        ...item,
        completed: false,
        itemId: getRandomInt(),
        createdAt: datetime_now,
        updatedAt: datetime_now,
      }

      name_existence_check(item, todolist)

      if (id_existence_check(new_item.itemId, todolist)) throw new Error('item_already_exists')

      todolist.push(new_item)

      datasource.persist()

      return new_item
    },
    /**
     * Atualiza informações especificas do item como:
     * - Nome,
     * - Descrição,
     * - Se está completa ou não
     * 
     * @param {*} item Item com novas informações
     * @returns {Promise<Item>}
     * 
     * Validações:
     * - Verifica se a lista possui itens
     * - Verifica se o item existe pelo ID
     * - Verifica se o nome está válido
     * - Verifica se o nome não é repetido
     * 
     * Resultado:
     * - Persiste as alterações e retorna o novo item.
     */
    update: async function (item) {
      const todolist = await datasource.get_todolist();

      if (!todolist.length) throw new Error('empty_list')
      if (!id_existence_check(item.itemId, todolist)) throw new Error('item_not_exists')

      const index = todolist.findIndex(i => i.itemId === item.itemId)

      todolist[index] = {
        ...todolist[index],
        name: item.name || todolist[index].name,
        description: item.description,
        completed: item.completed || todolist[index].completed,
        updatedAt: new Date()
      }

      datasource.persist()
      return todolist[index]
    },
    /**
     * Remove um item da lista
     * 
     * @param {number} itemId 
     * 
     * Validações:
     * - Verifica se a lista possui itens
     * - Verifica se o ID existe
     * 
     * Resultado:
     * - Deleta um item usando .splice()
     * - Persiste no banco de dados
     */
    delete: async function (itemId) {
      const todolist = await datasource.get_todolist();
  
      if (!todolist.length) throw new Error('empty_list')
      if (!id_existence_check(itemId, todolist)) throw new Error('item_not_exists')

      const index = todolist.findIndex(item => item.itemId === itemId)

      todolist.splice(index, 1)

      datasource.persist()

      return true
    }
  }
};