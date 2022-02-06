import { Button, FormGroup, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

function TodoForm() {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");
  const clickAddTodo = () => {
    dispatch(addTodo(todoText));
    setTodoText("");
  };
  const enterAddTodo = (e) => {
    if (e.key === "Enter") {
      clickAddTodo();
    }
  };
  return (
    <FormGroup className="todo-form">
      <TextField
        className="todo-input"
        sx={{ bgcolor: "white", flexGrow: 1 }}
        label="Todo Text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyPress={enterAddTodo}
        variant="filled"
      />
      <Button
        variant="contained"
        onClick={clickAddTodo}
        className="todo-button"
      >
        Add Todo
      </Button>
    </FormGroup>
  );
}

export default TodoForm;
