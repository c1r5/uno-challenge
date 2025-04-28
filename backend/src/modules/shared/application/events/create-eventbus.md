# Documentação

## Arquivo: `create-eventbus.js`

### Descrição

Implementação de um EventBus baseado em `EventEmitter`, tipado conforme os eventos e payloads definidos no projeto. Permite inscrever handlers para eventos, cancelar inscrições e publicar eventos.

### Interface `EventBus`

- `subscribe(event, handler)`:
  - Registra um handler para escutar um evento específico.
  - **Parâmetros:**
    - `event: keyof EventPayloads` — Nome do evento.
    - `handler: EventHandler<K>` — Função assíncrona ou síncrona para lidar com o evento.

- `unsubscribe(event, handler)`:
  - Remove um handler previamente registrado.
  - **Parâmetros:**
    - `event: keyof EventPayloads`
    - `handler: EventHandler<K>`

- `publish(event, payload)`:
  - Emite um evento com os dados associados.
  - **Parâmetros:**
    - `event: keyof EventPayloads`
    - `payload: EventPayloads[K]`

### Considerações

- A tipagem é estritamente baseada nos tipos declarados no `types.js`, prevenindo inconsistências de runtime na camada de edição.
- O EventEmitter do Node.js é utilizado diretamente, sem wrappers de validação de evento.