import { name_validation } from "../../domain/validate_item.js";

/**
 * ItemService
 * 
 * Camada responsável por orquestrar regras de validação e delegar operações ao ItemRepository.
 *
 * Funções:
 * - get_todolist(): Busca itens com filtro opcional.
 * - add_item(): Valida e adiciona novo item.
 * - update_item(): Valida e atualiza item existente.
 * - delete_item(): Remove item por ID.
 * 
 * @param {ItemRepository} repository - Instância do repositório de itens.
 * @param {EventBus} eventbus
 * @returns {ItemService}
 */
export function createItemService(repository, eventbus) {
  return {
    /**
     * Monitora as listas por itens não completados
     * 
     * @param {number} intervalMs Intervalo de tempo para obter os itens
     */
    monitor_pending_items: function (intervalMs = 60 * 1000) { // padrão: 1 minuto
      console.log('[+] Monitorando itens pendentes.')
      setInterval(async () => {

        const pendingItems = await repository.find({
          completed: false
        });

        if (pendingItems.length > 0) {
          eventbus.publish('pendingItemsDetected', {
            items: pendingItems
          });
        }
      }, intervalMs);
    },

    /**
     * Retorna a lista de tarefas, podendo aplicar filtros por nome ou ID.
     * 
     * @param {Filter} [filter] Filtro opcional.
     * @returns {Promise<Item[]>}
     */
    get_todolist: function (filter = null) {
      return repository.find(filter);
    },

    /**
     * Adiciona um novo item após validar os dados.
     * 
     * @param {Item} item - Dados do novo item.
     * @returns {Promise<Item>}
     * @throws {Error} Se a validação do nome falhar.
     */
    add_item: function (item) {
      name_validation(item);
      return repository.insert(item);
    },

    /**
     * Atualiza um item existente após validar os dados.
     * 
     * @param {Item} item - Dados atualizados do item.
     * @returns {Promise<Item>}
     * @throws {Error} Se a validação do nome falhar.
     */
    update_item: function (item) {
      if(item.name) {
        name_validation(item)
      }
      return repository.update(item);
    },

    /**
     * Remove um item pelo seu ID.
     * 
     * @param {number} itemId - Identificador do item.
     * @returns {Promise<boolean>}
     */
    delete_item: function (itemId) {
      return repository.delete(itemId);
    }
  }
};
