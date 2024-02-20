import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onCheck }) {
  if (todos.length < 1) {
    return (
      <div className="todo-list">
        <p>Your to-do is empty</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      { todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          name={todo.name}
          complete={todo.complete}
          onCheck={onCheck}
        />
      ))}
    </div>
  );
}

export default TodoList;
