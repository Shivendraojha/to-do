import React, { useState } from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';

const AppContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
`;

const InputContainer = styled.div`
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
`;

const AddButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <AppContainer>
      <h1>  To-Do App</h1>
      <InputContainer>
        <InputField type="text" value={todo} onChange={handleInputChange} placeholder="Enter your task" />
        <AddButton onClick={addTodo}>Add</AddButton>
      </InputContainer>
      <TodoList todos={todos} onDelete={deleteTodo} />
    </AppContainer>
  );
};

export default App;
