import { createReducer } from '@reduxjs/toolkit';
import { addTodo, editTodo, deleteTodo, toggleTodo } from './actions';

const initialState = {
  todos: [],
};

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.todos.push(action.payload);
    })
    .addCase(editTodo, (state, action) => {
      const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
      if (todoIndex !== -1) {
        state.todos[todoIndex].text = action.payload.text;
      }
    })
    .addCase(deleteTodo, (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    });
});

export default todoReducer;
