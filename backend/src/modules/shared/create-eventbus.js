import { EventEmitter } from 'node:events';

/**
 * @returns {EventBus}
 */
export function createEventBus() {
  const emitter = new EventEmitter()
  return {
    subscribe: function (event, handler) {
      emitter.on(event, handler)
    },
    unsubscribe: function (event, handler) {
      emitter.off(event, handler);
    },
    publish: function (event, payload) {
      emitter.emit(event, payload);
    }
  }
}
