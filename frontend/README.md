# Todo List Application - Documentação

## 📄 Visão Geral
Aplicativo de lista de tarefas implementado com React, Apollo Client e Styled-components.
Organizado em arquitetura Container/View + Hook Customizado.

- Controle de tarefas (criar, editar, concluir, excluir, filtrar)
- Integração com API GraphQL
- Interface moderna com Material UI + Styled Components

---

## 🔧 Estrutura de Pastas

```bash
/src
  /features
    /todo
      TodoListContainer.jsx   # Componente inteligente (Container)
      TodoListView.jsx        # Componente de apresentação (View)
      useTodoList.js          # Hook customizado com lógica de negócio
      styles.js               # Componentes estilizados
      queries.js              # Queries e Mutations GraphQL
```

---

## 📅 Componentes e Funções

### 1. `TodoListContainer.jsx`
- Integra o Hook `useTodoList` com a View.
- Gerencia o formulário de criação e filtros.
- Passa os handlers para o `TodoListView`.

### 2. `TodoListView.jsx`
- Componente de apresentação.
- Renderiza a lista de tarefas.
- Permite editar, concluir ou deletar tarefas.

### 3. `useTodoList.js`
- Hook customizado que implementa toda a lógica de negócio.

#### Métodos do Hook:

| Função | Descrição |
|:--|:--|
| `handleAddItem()` | Adiciona uma nova tarefa |
| `handleDeleteItem(itemId)` | Remove uma tarefa |
| `handleToggleCompleted(task)` | Alterna o status de concluído |
| `handleFilterItems()` | Filtra tarefas pelo nome |
| `handleEditToggle(task)` | Ativa modo de edição para uma tarefa |
| `handleEditChange(itemId, field, value)` | Atualiza localmente a edição |
| `handleSaveEdit(task)` | Salva as edições no servidor |

### 4. `styles.js`
- Componentes estilizados usando styled-components:
  - `Container`
  - `FormContainer`
  - `ListContainer`
  - `ScrollContainer`
  - `ButtonGroup`
  - `InputGroup`
  - `Title`

### 5. `queries.js`
- Define as operações GraphQL usadas:
  - `GET_TODO_LIST`
  - `ADD_ITEM_MUTATION`
  - `DELETE_ITEM_MUTATION`
  - `UPDATE_ITEM_MUTATION`

---

## 🔎 Tecnologias Utilizadas

- React 
- Apollo Client 3+
- Styled-components
- Material UI (MUI)
- GraphQL API Backend

---

## ✨ Padrões Adotados

- **Separar responsabilidades** (Container vs View)
- **Hooks customizados** para lógica de negócio
- **Styled Components** para estilização modular
- **Documentação** clara dos métodos

---

### Resumo Técnico - Frontend

Após analisar a stack existente (React, Apollo Client, Styled-components e Material UI), optamos por seguir com JavaScript puro, focando em produtividade e clareza.  
Estruturamos o frontend separando responsabilidades em Container, View e Hooks customizados, aplicando padrões modernos sem complicar desnecessariamente.

## Principais Decisões e Implementações

- **TodoListContainer**: componente inteligente que conecta lógica e interface.
- **TodoListView**: componente de apresentação puro, focado apenas em renderizar dados.
- **useTodoList**: hook customizado contendo toda a lógica de negócio e integrações GraphQL.
- **Styled Components**: padronização visual sem dependência de `sx` do Material UI.
- **Apollo Client**: gerenciamento de estado remoto e mutations.
- **Datasource**: persistência leve e segura através de chamadas GraphQL.

## Estratégias Técnicas

- Adoção de arquitetura **Container/View** para clara separação de responsabilidades.
- **Documentação via JSDoc** para funções e hooks.
- **Design responsivo** usando Material UI e Styled Components combinados.
- Controle de filtro, edição e conclusão com feedback visual imediato.
- Priorização de simplicidade no fluxo de estado e minimização de dependências externas.