import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ItemContainer = styled.div`
  background-color: ${props => props.color || '#ffffff'};
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: ${fadeIn} 0.5s ease;

  button {
    background-color: #ff6b6b;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #ff5252;
    }
  }
`;

 
const TodoItem = ({ todo, index, onDelete, color }) => {
    return (
      <ItemContainer color={color}>
        <span>{index}. {todo}</span>
        <button onClick={onDelete}>Delete</button>
      </ItemContainer>
    );
  };
  



export default TodoItem;
