import { Typography, Alert, TextField, Fab } from "@mui/material";
import { Container, FormContainer, ListContainer, InputGroup } from "./styles";

import { Add, FilterList } from "@mui/icons-material";
import { useTodoList } from "./useTodoList";
import TodoListView from "./TodoListView";

export default function TodoListContainer() {
  const {
    todoList,
    itemInput,
    setItemInput,
    editState,
    error,
    handleAddItem,
    handleDeleteItem,
    handleToggleCompleted,
    handleFilterItems,
    handleEditToggle,
    handleEditChange,
    handleSaveEdit,
  } = useTodoList();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <ListContainer>
        <Typography variant="h4" align="center" gutterBottom>
          TODO LIST
        </Typography>

        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <TextField  
              label="Nome da tarefa"
              value={itemInput}   
              onChange={(e) => setItemInput(e.target.value)}
              variant="standard"
              error={!!error}
              helperText={error && "Corrija os erros para prosseguir."}
              fullWidth
            />
            <Fab size="small" color="primary" type="submit" aria-label="add">
              <Add />
            </Fab>
            <Fab size="small" color="primary" onClick={handleFilterItems} aria-label="filter">
              <FilterList />
            </Fab>
          </InputGroup>
        </FormContainer>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <TodoListView
          todoList={todoList}
          editState={editState}
          onDeleteItem={handleDeleteItem}
          onToggleCompleted={handleToggleCompleted}
          onEditToggle={handleEditToggle}
          onEditChange={handleEditChange}
          onSaveEdit={handleSaveEdit}
        />
      </ListContainer>
    </Container>
  );
}