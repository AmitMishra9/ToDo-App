import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('ADD_TODO');
export const editTodo = createAction('EDIT_TODO');
export const deleteTodo = createAction('DELETE_TODO');
export const toggleTodo = createAction('TOGGLE_TODO');