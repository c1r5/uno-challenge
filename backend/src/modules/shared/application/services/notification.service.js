/**
 * Serviço responsável por lidar com eventos de itens pendentes detectados.
 *
 * @param {EventBus} eventbus - Instância de EventBus para registrar eventos.
 * @returns {void}
 */
export function createNotificationService(eventbus) {
  console.log('[+] Serviço de notificação criado, aguardando evento...')

  eventbus.subscribe('pendingItemsDetected', async (payload) => {
    /**
     * @type {PendingItemsPayload}
     */
    const { items } = payload;

    console.log(`[Notificação] Você tem ${items} tarefas pendentes.`)
  });
}
