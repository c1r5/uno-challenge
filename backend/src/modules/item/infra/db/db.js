import * as fs from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';

/**
 * Datasource
 * 
 * Responsável pela persistência da lista de tarefas (`todolist`) em um arquivo JSON.
 *
 * Funções:
 * - initialize(): Carrega ou cria o arquivo de dados.
 * - get_todolist(): Retorna a lista atual de tarefas.
 * - persist(): Persiste as alterações no arquivo.
 * 
 * @param {string} file - Caminho do arquivo de persistência.
 * @returns {Datasource}
 */
export default (file) => ({
  todolist: [],

  /**
   * Inicializa o datasource.
   * - Se o arquivo existir, carrega os dados para a memória.
   * - Se não existir, cria o arquivo com uma lista vazia.
   * 
   * @returns {Promise<void>}
   */
  initialize: async function () {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf-8');
      this.todolist = JSON.parse(data);
    } else {
      this.todolist = [];
      this.persist();
    }
  },

  /**
   * Retorna a lista de tarefas atualizada a partir do arquivo.
   * 
   * @returns {Promise<Item[]>}
   */
  get_todolist: async function () {
    const data = await readFile(file, 'utf8');
    this.todolist = JSON.parse(data);
    return this.todolist;
  },

  /**
   * Persiste a lista de tarefas atual no arquivo.
   * 
   * @returns {Promise<void>}
   */
  persist: async function () {
    return writeFile(file, JSON.stringify(this.todolist, null, 2), 'utf-8');
  }
});
