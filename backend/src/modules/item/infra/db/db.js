import * as fs from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
/**
 * @param {string} file
 * @returns {Datasource}
 */
export default (file) => ({
  todolist: [],

  initialize: async function () {
    if (fs.existsSync(file)) {
      const data = fs.readFileSync(file, 'utf-8');
      this.todolist = JSON.parse(data);
    } else {
      this.todolist = [];
      this.persist()
    }
  },

  get_todolist: async function () {
    const data = await readFile(file, 'utf8')
    this.todolist = JSON.parse(data)
    return this.todolist
  },

  persist: async function () {
    return writeFile(file, JSON.stringify(this.todolist, null, 2), 'utf-8');
  }
});
