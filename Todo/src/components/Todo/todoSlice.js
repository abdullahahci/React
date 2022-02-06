import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
let initialValues = window.localStorage.getItem("todoList");

function storeTodoList(todoList) {
  window.localStorage.setItem("todoList", JSON.stringify(todoList));
}

const todoSlice = createSlice({
  name: "todoList",
  initialState: {
    value: initialValues !== null ? JSON.parse(initialValues) : [],
  },
  reducers: {
    addTodo: (state, action) => {
      let date = new Date().toLocaleString();
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        done: false,
        date: date,
      };
      state.value = [...current(state.value), newTodo];
      storeTodoList([...state.value]);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
      storeTodoList(state.value);
    },
    changeTodo: (state, action) => {
      state.value = state.value.map((item, index) => {
        return item.id === action.payload
          ? { ...item, done: !item.done }
          : item;
      });
      storeTodoList(state.value);
    },
  },
});

export const { addTodo, removeTodo, changeTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todoList.value;

export default todoSlice.reducer;
