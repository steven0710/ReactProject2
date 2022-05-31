import React, { useState } from 'react';

const ToDoForm = ({ addToDo }) => {
  const [toDo, setToDo] = useState('');

  const setStateOnSubmit = (e) => {
    e.preventDefault();
    addToDo(toDo);
    setToDo('');
  };
  return (
    <form onSubmit={setStateOnSubmit} className="todo-form">
      <input
        className="todo-input"
        onChange={(e) => setToDo(e.target.value)}
        type="text"
        value={toDo}
      />
      <button className="todo-btn">Enter</button>
    </form>
  );
};

export default ToDoForm;
