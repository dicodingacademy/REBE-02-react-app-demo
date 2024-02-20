import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoName: '',
    };
  }

  onNewTodoChange(event) {
    const { target } = event;

    this.setState(() => ({
      todoName: target.value,
    }));
  }

  addTodo() {
    const { onAddTodo } = this.props;
    const { todoName } = this.state;

    onAddTodo(todoName);
  }

  render() {
    const { todoName } = this.state;
    return (
      <div className="todo-input">
        <input
          type="text"
          value={todoName}
          onChange={(event) => this.onNewTodoChange(event)}
        />
        <button
          type="button"
          onClick={() => this.addTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}

export default TodoInput;
