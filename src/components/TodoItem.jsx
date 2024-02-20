import React from 'react';

function TodoItem({
  id, name, complete, onCheck,
}) {
  const check = (event) => {
    const { target } = event;
    onCheck({ id, complete: target.checked });
  };

  return (
    <div className="todo-item">
      <p className={complete ? 'todo-item__complete' : ''}>
        <input type="checkbox" checked={complete} onChange={check} />
        {' '}
        {name}
      </p>
    </div>
  );
}

export default TodoItem;
