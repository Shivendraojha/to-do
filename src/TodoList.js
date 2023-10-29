import React from 'react';
import TodoItem from './TodoItem';
import styled  from 'styled-components';

const TodoListContainer = styled.div`
  margin-top: 20px;
`;

const TodoList = ({ todos, onDelete }) => {
  const colors = ['#ffcc80', '#80cbc4', '#ffab91', '#b0bec5', '#c5e1a5'];

  return (
    <TodoListContainer>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index + 1}
          onDelete={() => onDelete(index)}
          color={colors[index % colors.length]}
        />
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
