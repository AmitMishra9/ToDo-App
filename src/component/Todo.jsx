import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, editTodo, deleteTodo, toggleTodo } from '../redux/actions';
import TodoList from './TodoList';
import "../Styles/Todo.css";

import {
  BsFillSunFill,
  BsFillMoonStarsFill,
  BsToggle2On,
  BsToggle2Off,
} from "react-icons/bs";

function Todo() {
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [dayNight, setDayNight] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos-list');
    if (storedTodos && JSON.parse(storedTodos).length > 1) { 
      dispatch(addTodo(JSON.parse(storedTodos)));
    }
  }, [dispatch]);
  const todos = useSelector(state => state.todo.todos);
  useEffect(() => {
    localStorage.setItem('todos-list', JSON.stringify(todos));
  }, [todos]);
  

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleAddTodo = () => {
    if (input === '') {
      return;
    }
    if (editingId !== null) {
      dispatch(editTodo({ id: editingId, text: input }));
      setEditingId(null);
    } else {
      dispatch(addTodo({ id: Date.now(), text: input, completed: false }));
    }
    setInput('');
  };

  const handleEditTodo = (id) => {
    setInput(todos.find(todo => todo.id === id).text);
    setEditingId(id);
    inputRef.current.focus();
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleToggleDayNight = () => {
    setDayNight(!dayNight);
  };

  return (
    <div className={dayNight ? 'todo-container-toggle' : 'todo-container'}>
    
      <h1 style={dayNight ? { color: 'white' } : {}}>Todo List App</h1>

      <div className="toggle-day-night">
        <div>
          {dayNight ? <span style={{ color: 'white' }}><BsFillSunFill /> </span> : <BsFillMoonStarsFill />}
        </div>

        <div onClick={handleToggleDayNight} className="toggleButtonDayNight">
          {dayNight ? <span style={{ color: 'white' }}><BsToggle2On /></span> : <BsToggle2Off />}
        </div>
      </div>

      <div className="output-container" style={dayNight ? { backgroundColor: 'black' } : {}}>
        <div>
          <input
            type="text"
            value={input}
            placeholder="Add todos..."
            onChange={handleInput}
            ref={inputRef}
            style={dayNight ? { backgroundColor: '#3e434e', color: 'white', border: 'none' } : {}}
          />
          <button
            className="add-button"
            onClick={handleAddTodo}
            style={dayNight ? { backgroundColor: 'green', color: 'black', fontWeight: '600' } : {}}
          >
            {editingId ? 'Update' : 'Add'}
          </button>
        </div>

        <TodoList
          todos={todos}
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleTodo={handleToggleTodo}
          dayNight={dayNight}
        />
      </div>
    </div>
  );
}

export default Todo;
