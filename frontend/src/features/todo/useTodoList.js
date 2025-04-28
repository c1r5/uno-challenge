import { useState } from "react";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import {
  GET_TODO_LIST,
  ADD_ITEM_MUTATION,
  DELETE_ITEM_MUTATION,
  UPDATE_ITEM_MUTATION,
} from "./queries";

export function useTodoList() {
  const [editState, setEditState] = useState({});
  const [itemInput, setItemInput] = useState("");
  const [error, setError] = useState("");

  const { data } = useQuery(GET_TODO_LIST);
  const [getFilteredTodoList, { data: filteredData }] = useLazyQuery(GET_TODO_LIST);

  const [addItem] = useMutation(ADD_ITEM_MUTATION);
  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION);
  const [updateItem] = useMutation(UPDATE_ITEM_MUTATION);

  const todoList = filteredData?.getTodoList || data?.getTodoList || [];

  const handleAddItem = async () => {
    setError("");
    if (!itemInput.trim()) {
      setError("O campo nome não pode estar vazio.");
      return;
    }
    try {
      await addItem({
        variables: { values: { name: itemInput } },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_TODO_LIST }],
      });
      setItemInput("");
    } catch (err) {
      setError(err?.message || "Erro ao adicionar item.");
    }
  };

  const handleDeleteItem = async (id) => {
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

  const handleToggleCompleted = async (task) => {
    setError("");
    try {
      await updateItem({
        variables: { values: { itemId: task.itemId, completed: !task.completed } },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_TODO_LIST }],
      });
    } catch (err) {
      setError(err?.message || "Erro ao atualizar status.");
    }
  };

  const handleFilterItems = async () => {
    setError("");
    try {
      await getFilteredTodoList({ variables: { filter: { name: itemInput } } });
    } catch (err) {
      setError(err?.message || "Erro ao filtrar itens.");
    }
  };

  const handleEditToggle = (task) => {
    setEditState((prev) => ({
      ...prev,
      [task.itemId]: {
        editing: true,
        name: task.name,
        description: task.description || "",
      },
    }));
  };

  const handleEditChange = (id, field, value) => {
    setEditState((prev) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleSaveEdit = async (task) => {
    setError("");
    const { name, description } = editState[task.itemId];
    try {
      await updateItem({
        variables: { values: { itemId: task.itemId, name, description } },
        awaitRefetchQueries: true,
        refetchQueries: [{ query: GET_TODO_LIST }],
      });
      setEditState((prev) => ({ ...prev, [task.itemId]: { editing: false } }));
    } catch (err) {
      setError(err?.message || "Erro ao salvar edição.");
    }
  };

  return {
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
  };
}