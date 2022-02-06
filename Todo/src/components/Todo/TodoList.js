import { useSelector } from "react-redux";
import { selectTodoList } from "./todoSlice";
import { Container, List, Typography } from "@mui/material";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export function TodoList() {
  const todoList = useSelector(selectTodoList);

  return (
    <Container>
      <Typography variant="h3" align="center">
        Todo List
      </Typography>
      <TodoForm />
      <List className="todo-list">
        {todoList.length === 0 ? (
          <Typography variant="h5" align="center">
            There is no todo
          </Typography>
        ) : (
          [
            todoList
              .filter((todo) => !todo.done)
              .map((todo) => <Todo key={todo.id} todo={todo} />),
            todoList
              .filter((todo) => todo.done)
              .map((todo) => <Todo key={todo.id} todo={todo} />),
          ]
        )}
      </List>
    </Container>
  );
}
