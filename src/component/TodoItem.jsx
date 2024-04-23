import React from 'react';

function TodoItem({ todo, handleEditTodo, handleDeleteTodo, handleToggleTodo, dayNight }) {
  return (
    <li
      className="todo-items"
      style={
        dayNight
          ? {
              color: 'white',
              backgroundColor: '#272829',
              border: '1px solid white',
              fontWeight: '500',
            }
          : {}
      }
    >
      {todo.completed ? (
        <span className="output-text-completed"> {todo.text}</span>
      ) : todo.isEdit ? (
        <span className="output-text-edit">{todo.text}</span>
      ) : (
        <span className="output-text">{todo.text}</span>
      )}

      <div className="button-container">
        <button
          className={todo.completed ? 'button-toggle-done btn' : 'button-toggle btn'}
          onClick={() => handleToggleTodo(todo.id)}
        >
          {todo.completed ? 'Completed' : 'Mark as done'}
        </button>
        <button className="button-edit btn" onClick={() => handleEditTodo(todo.id)}>
          Edit
        </button>
        <button className="button-delete btn" onClick={() => handleDeleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
