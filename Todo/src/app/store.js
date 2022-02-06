import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../components/Todo/todoSlice";
export default configureStore({
  reducer: {
    todoList: todoListReducer,
  },
});
