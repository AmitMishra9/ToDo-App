import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, handleEditTodo, handleDeleteTodo, handleToggleTodo, dayNight }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
          dayNight={dayNight}
        />
      ))}
    </ul>
  );
}

export default TodoList;
