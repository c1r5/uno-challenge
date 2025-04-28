import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

/**
 * Datasource
 *
 * @param {string} file - Caminho do arquivo de persistência.
 * @returns {Datasource}
 */
export function createDatasource(file) {
  let todolist = [];

  async function loadFromFile() {
    try {
      const data = await readFile(file, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Erro ao ler arquivo:', error);
      return [];
    }
  }

  async function saveToFile() {
    try {
      await writeFile(file, JSON.stringify(todolist, null, 2), 'utf-8');
    } catch (error) {
      console.error('Erro ao escrever arquivo:', error);
    }
  }

  return {
    /**
     * Inicializa o datasource.
     * @returns {Promise<void>}
     */
    async initialize() {
      if (existsSync(file)) {
        todolist = await loadFromFile();
      } else {
        todolist = [];
        await saveToFile();
      }
      console.log('[+] Banco de dados inicializado:', todolist.length, 'itens.');
    },

    /**
     * Retorna a lista atual de tarefas.
     * @returns {Array}
     */
    getTodolist() {
      return todolist;
    },

    /**
     * Atualiza a lista de tarefas atual e persiste.
     * @param {Array} newList
     * @returns {Promise<void>}
     */
    async persist(newList) {
      todolist = Array.isArray(newList) ? newList : [];
      await saveToFile();
    },

    /**
     * Atualiza a lista de tarefas a partir do disco.
     * @returns {Promise<void>}
     */
    async synchronize() {
      todolist = await loadFromFile();
      console.log('[+] Banco de dados sincronizado:', todolist.length, 'itens.');
    },
  };
}
