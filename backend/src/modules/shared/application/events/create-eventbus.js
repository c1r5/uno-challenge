import { EventEmitter } from 'node:events';

/**
 * Cria uma instância de EventBus baseada em EventEmitter.
 *
 * @returns {EventBus} EventBus configurado para subscrição, publicação e remoção de eventos.
 */
export function createEventBus() {
  const emitter = new EventEmitter();

  return {
    /**
     * Registra um handler para um evento específico.
     *
     * @template {keyof EventPayloads} K
     * @param {K} event - Nome do evento a escutar.
     * @param {EventHandler<K>} handler - Função a ser chamada quando o evento ocorrer.
     */
    subscribe(event, handler) {
      emitter.on(event, handler);
    },

    /**
     * Remove um handler previamente registrado para um evento.
     *
     * @template {keyof EventPayloads} K
     * @param {K} event - Nome do evento.
     * @param {EventHandler<K>} handler - Função previamente registrada.
     */
    unsubscribe(event, handler) {
      emitter.off(event, handler);
    },

    /**
     * Emite um evento com os dados associados.
     *
     * @template {keyof EventPayloads} K
     * @param {K} event - Nome do evento.
     * @param {EventPayloads[K]} payload - Dados a serem enviados com o evento.
     */
    publish(event, payload) {
      emitter.emit(event, payload);
    },
  };
}