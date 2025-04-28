import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Button, TextField, Alert } from "@mui/material";
import { styled } from "styled-components";
import { useMutation, useQuery, useLazyQuery } from "@apollo/client";
import { ADD_ITEM_MUTATION, GET_TODO_LIST, DELETE_ITEM_MUTATION, UPDATE_ITEM_MUTATION } from "./queries";
import { Delete, Edit } from "@mui/icons-material";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background: #dcdcdc;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0.5rem;
`;

const ListContainer = styled.div`
  width: 600px;
  background: #dcdcdc;
  padding: 1rem;
  border-radius: 0.5rem;
`;

const ScrollContainer = styled.div`
  background: #efefef;
  padding: 1rem;
  border-radius: 0.5rem;
  max-height: 400px;
  overflow-y: auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
`;

export default function CheckboxList() {
  const [item, setItem] = useState("");
  const [error, setError] = useState("");

  const { data } = useQuery(GET_TODO_LIST);
  const [getFilteredTodoList, { data: filteredData }] = useLazyQuery(GET_TODO_LIST);

  const [addItem] = useMutation(ADD_ITEM_MUTATION);
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION);
  const [updateItem] = useMutation(UPDATE_ITEM_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!item.trim()) {
      setError("O campo nome não pode estar vazio.");
      return;
    }

    try {
      await addItem({
        variables: { values: { name: item } },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_TODO_LIST }],
      });
      setItem("");
    } catch (err) {
      setError(err?.message || "Erro ao adicionar item.");
    }
  };

  const handleDelete = async (id) => {
    setError("");
    try {
      await deleteItem({
        variables: { itemId: id },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_TODO_LIST }],
      });
    } catch (err) {
      setError(err?.message || "Erro ao deletar item.");
    }
  };

  const handleToggleCompleted = async (item) => {
    setError("");
    try {
      await updateItem({
        variables: { values: { itemId: item.itemId, completed: !item.completed } },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_TODO_LIST }],
      });
    } catch (err) {
      setError(err?.message || "Erro ao atualizar item.");
    }
  };

  const handleFilter = async () => {
    setError("");
    try {
      await getFilteredTodoList({
        variables: { filter: { name: item } },
      });
    } catch (err) {
      setError(err?.message || "Erro ao filtrar itens.");
    }
  };

  const todoList = filteredData?.getTodoList || data?.getTodoList || [];

  return (
    <Container>
      <ListContainer>
        <Title>TODO LIST</Title>
        <FormContainer onSubmit={handleSubmit}>
          <TextField
            label="Nome da tarefa"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            variant="standard"
            error={!!error}
            helperText={error && "Corrija os erros para prosseguir."}
          />
          <ButtonGroup>
            <Button variant="contained" color="info" fullWidth onClick={handleFilter}>
              Filtrar
            </Button>
            <Button variant="contained" color="success" type="submit" fullWidth>
              Salvar
            </Button>
          </ButtonGroup>
        </FormContainer>
        {error && (
          <Alert severity="error" sx={{ marginTop: "10px" }}>
            {error}
          </Alert>
        )}
        <List>
          <ScrollContainer>
            {todoList.map((task) => (
              <ListItem
                key={task.itemId}
                sx={{
                  borderRadius: "5px",
                  marginY: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <div style={{ flex: 1 }}>
                  <ListItemText
                    primary={task.name}
                    secondary={task.completed ? "Concluído" : "Pendente"}
                  />
                </div>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <Button
                    size="small"
                    variant="outlined"
                    color={task.completed ? "success" : "warning"}
                    onClick={() => handleToggleCompleted(task)}
                  >
                    {task.completed ? "Desmarcar" : "Concluir"}
                  </Button>
                  <Edit style={{ cursor: "pointer" }} onClick={() => console.log("Editar", task.itemId)} />
                  <Delete style={{ cursor: "pointer" }} onClick={() => handleDelete(task.itemId)} />
                </div>
              </ListItem>
            ))}
          </ScrollContainer>
        </List>
      </ListContainer>
    </Container>
  );
}
