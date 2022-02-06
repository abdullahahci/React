# A simple Todo App using React, Redux with toolkit, MaterialUI

## Trying the app

After downloading the app, use `npm install` to download required libraries then execute `npm start` on command line in the project folder to run the app
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project specifications

This project is bootstrapped via create-react-app

The project uses `Redux` for state management. Firstly creates a slice via `Redux Toolkit` in the [todoSlice.js](./src/components/Todo/todoSlice.js).

Initial state is an empty array, after adding some Todo, they will be stored in the `localStorage` then those will be used as initial values

This reducer in the `todoSlice` is used in the [store.js](./src/app/store.js), then the store is created via `configureStore` from `Redux Toolkit`, which is then used in the [index.js](./src/index.js) file via `Redux Provider`

Adding Todo operation is handled inside [TodoForm.js](./src/components/Todo/TodoForm.js), updating or deleting a Todo is handled inside [Todo.js](./src/components/Todo/Todo.js) with importing and using the reducers from `todoSlice`.
