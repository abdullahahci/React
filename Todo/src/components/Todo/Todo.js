import React from "react";
import { useDispatch } from "react-redux";
import { changeTodo, removeTodo } from "./todoSlice";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  Checkbox,
  FormGroup,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function Todo({ todo }) {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemButton
        className="todo"
        onClick={() => dispatch(changeTodo(todo.id))}
        sx={{
          color: "info.light",
          ":hover": "primary.dark",
        }}
      >
        <FormGroup
          sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        >
          <Checkbox checked={todo.done} />
          <ListItemText
            primary={todo.text}
            secondary={todo.date}
            sx={{
              color: "primary.dark",
              textDecoration: todo.done ? "line-through" : "none",
            }}
          />
        </FormGroup>
      </ListItemButton>
      <DeleteIcon
        sx={{
          color: "info.light",
          cursor: "pointer",
        }}
        onClick={() => dispatch(removeTodo(todo.id))}
      />
    </ListItem>
  );
}

export default Todo;
