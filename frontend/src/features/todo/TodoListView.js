import { List, ListItem, ListItemText, Checkbox, IconButton, Box, Typography } from "@mui/material";

import { Delete, Edit, Save } from "@mui/icons-material";

function formatDate(dateInput) {
  if (!dateInput) return "";
  let date;
  if (typeof dateInput === "string" && /^\d+$/.test(dateInput)) {
    date = new Date(Number(dateInput));
  } else {
    date = new Date(dateInput);
  }
  if (isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
}

export default function TodoListView({
  todoList,
  editState,
  onDeleteItem,
  onToggleCompleted,
  onEditToggle,
  onEditChange,
  onSaveEdit,
}) {
  return (
    <List sx={{ background: "#efefef", p: 2, borderRadius: 2, maxHeight: 400, overflowY: "auto" }}>
      {todoList.map((task) => {
        const isEditing = editState[task.itemId]?.editing;
        return (
          <ListItem
            key={task.itemId}
            sx={{
              borderRadius: "5px",
              mb: 1,
              backgroundColor: isEditing ? "#f0f0f0" : "inherit",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Box display="flex" alignItems="center" flex={1}>
              <Checkbox
                checked={task.completed}
                onChange={() => onToggleCompleted(task)}
                color="primary"
              />
              {isEditing ? (
                <Box display="flex" flexDirection="column" flex={1}>
                  <Typography
                    variant="body2"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onEditChange(task.itemId, "name", e.target.innerText)}
                    sx={{ mb: 1, background: "#fff", p: 0.5, borderRadius: 1 }}
                  >
                    {editState[task.itemId]?.name || ""}
                  </Typography>
                  <Typography
                    variant="body2"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) => onEditChange(task.itemId, "description", e.target.innerText)}
                    sx={{ background: "#fff", p: 0.5, borderRadius: 1 }}
                  >
                    {editState[task.itemId]?.description || ""}
                  </Typography>
                </Box>
              ) : (
                <ListItemText
                  primary={
                    <Typography
                      variant="body1"
                      sx={{
                        textDecoration: task.completed ? "line-through" : "none",
                        color: task.completed ? "text.secondary" : "text.primary",
                      }}
                    >
                      {task.name}
                    </Typography>
                  }
                  secondary={
                    <>
                      {task.description && (
                        <Typography variant="body2" color="text.secondary" display="block">
                          {task.description}
                        </Typography>
                      )}
                      <Typography variant="caption" color="text.secondary" display="block">
                        Criado: {formatDate(task.createdAt)}
                      </Typography>
                      {task.updatedAt && task.updatedAt !== task.createdAt && (
                        <Typography variant="caption" color="text.secondary" display="block">
                          Atualizado: {formatDate(task.updatedAt)}
                        </Typography>
                      )}
                    </>
                  }
                  sx={{
                    cursor: "pointer",
                    ":hover": { textDecoration: "underline" },
                  }}
                />
              )}
            </Box>
            <Box display="flex" gap={1}>
              {isEditing ? (
                <IconButton color="success" onClick={() => onSaveEdit(task)}>
                  <Save />
                </IconButton>
              ) : (
                <IconButton color="primary" onClick={() => onEditToggle(task)}>
                  <Edit />
                </IconButton>
              )}
              <IconButton color="error" onClick={() => onDeleteItem(task.itemId)}>
                <Delete />
              </IconButton>
            </Box>
          </ListItem>
        );
      })}
    </List>
  );
}
